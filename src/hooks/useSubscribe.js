import { useEffect } from 'react';
import useForceUpdate from './useForceUpdate';

const useSubscribe = models => {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const subscriptions = models.map(model => model.subscribe(forceUpdate));
    return () => subscriptions.map(unsubscribe => unsubscribe());
  }, models);
}

export default useSubscribe;
