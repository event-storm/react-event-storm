import { useMemo } from 'react';

import { createProxy } from './utils';

const useStore = store => {
  const proxy = useMemo(() => createProxy(store, {
    getter: key => store.models[key].getState(),
  }), [store]);
  return proxy;
}

export default useStore;
