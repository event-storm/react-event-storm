import { useMemo, useRef } from 'react';

import useForceUpdate from './useForceUpdate';

const takeAll = (state, exact) => exact(state);

const useStorm = (storm, callback = takeAll, { active = true } = {}) => {
  const forceUpdate = useForceUpdate();
  const resultRef = useRef(null);
  useMemo(() => {
    storm.subscribe((...args) => {
      resultRef.current = callback(...args);
      active && forceUpdate([]);
    });
  }, []);

  return active ? resultRef.current : useMemo(() => new Proxy(resultRef.current, {
    get: (_, prop) => resultRef.current[prop],
  }), [resultRef.current]);
};

export default useStorm;
