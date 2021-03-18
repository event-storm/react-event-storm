import { useMemo } from 'react';

import { createProxy } from './utils';
import useSubscribe from './useSubscribe';

const useStore = store => {
  const proxy = useMemo(() => createProxy(store.models, {
    getter: key => store.models[key].getState(),
  }), [store]);

  useSubscribe(Object.values(store.models));

  return proxy;
}

export default useStore;
