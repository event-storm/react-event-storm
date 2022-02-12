import { useMemo, useRef } from 'react';
import { selectFragment as eventStormSelectFragment } from 'event-storm';

import useSubscribe from './useSubscribe';

const takeAll = (state, exact) => exact(state);

const useStorm = (storm, selectFragment = takeAll, { active = true } = {}) => {
  const virtualModelRef = useRef(null);
  virtualModelRef.current = useMemo(() => eventStormSelectFragment(storm, selectFragment), [storm, selectFragment]);

  useSubscribe([virtualModelRef.current], active);

  return virtualModelRef.current.getState();
}

export default useStorm;
