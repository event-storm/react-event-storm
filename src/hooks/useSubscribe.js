import { useState, useEffect } from 'react';

const useSubscribe = models => {
  const [_, forceUpdate] = useState();

  useEffect(() => {
    const subscriptions = models.map(model => model.subscribe(() => forceUpdate([])));
    return () => subscriptions.map(unsubscribe => unsubscribe());
  }, models);
}

export default useSubscribe;
