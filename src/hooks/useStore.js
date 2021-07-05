import { useMemo, useRef } from 'react';

import { createProxy } from './utils';
import useSubscribe from './useSubscribe';

const useStore = store => {
  const modelRefs = useRef([]);
  const proxy = useMemo(() => createProxy(store.models, {
    getter: key => {
      !modelRefs.current.includes(key) && modelRefs.current.push(key);
      return store.models[key].getState();
    },
  }), [store]);

  const models = useMemo(
    () => Object.keys(store.models)
      .filter(key => modelRefs.current.includes(key))
      .map(key => store.models[key]),
    [...modelRefs.current, store.models],
  );

  useSubscribe(models);

  return proxy;
}

export default useStore;
