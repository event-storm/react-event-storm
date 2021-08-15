import { useMemo, useRef, useEffect } from 'react';

import { createProxy } from './utils';
import useForceUpdate from './useForceUpdate';

const useStore = (store, options = { active: true }) => {
  const modelRefs = useRef({});
  const forceUpdate = useForceUpdate();

  const proxy = useMemo(() => createProxy(store.models, {
    getter: key => {
      if (!options.active && modelRefs.current[key]) {
        modelRefs.current[key]();
      }
      if (!modelRefs.current[key] && options.active) {
        modelRefs.current[key] = store.models[key].subscribe(forceUpdate);
      }
      return store.models[key].getState();
    },
  }), [store.models.length]);

  useEffect(() => () => Object.values(modelRefs.current).forEach(unsubscribe => unsubscribe()), []);

  return proxy;
}

export default useStore;
