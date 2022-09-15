import { useMemo } from 'react';

import useForceUpdate from './useForceUpdate';

const useSubscribe = (models, active = true) => {
  const forceUpdate = useForceUpdate();

  useMemo(() => {
    const subscriptions = models.map(model => model.subscribe(() => active && forceUpdate()));
    return () => subscriptions.map(unsubscribe => unsubscribe());
  }, [...models, active]);
}

export default useSubscribe;
