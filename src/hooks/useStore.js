import { useMemo, useRef, useEffect } from 'react';
import { EVENT_STORM_INTERNALS } from 'event-storm';

import { createProxy } from './utils';
import useForceUpdate from './useForceUpdate';

const useStore = store => {
  const modelRefs = useRef({});
  const forceUpdate = useForceUpdate();

  const proxy = useMemo(() => createProxy(store.models, {
    getter: key => {
      if (EVENT_STORM_INTERNALS.subscriptionMode.getState() && !modelRefs.current[key]) {
        modelRefs.current[key] = store.models[key].subscribe(forceUpdate);
      }
      return store.models[key].getState();
    },
  }), [store]);

  useEffect(() => () => Object.values(modelRefs.current).forEach(subscription => subscription()), []);

  return proxy;
}

export default useStore;
