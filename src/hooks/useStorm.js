import { useEffect, useMemo, useRef } from 'react';

import useForceUpdate from './useForceUpdate';

const takeAll = (state, exact) => exact(state);

const useStorm = (storm, callback = takeAll, { active = true } = {}) => {
  const forceUpdate = useForceUpdate();
  const resultRef = useRef(null);
  const activeRef = useRef(active);
  const subscriptionRef = useRef(null);

  activeRef.current = active;
  useMemo(() => {
    subscriptionRef.current = storm.subscribe((...args) => {
      resultRef.current = callback(...args);
      activeRef.current && forceUpdate([]);
    });
  }, []);

  useEffect(() => subscriptionRef.current, []);

  return active ? resultRef.current : resultRef;
};

export default useStorm;
