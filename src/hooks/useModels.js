import { useState, useEffect } from 'react';

const useModels = (...models) => {
  const [_, forceUpdate] = useState();

  useEffect(() => {
    const subscriptions = models.map(model => model.subscribe(() => forceUpdate([])));
    return () => subscriptions.map(unsubscribe => unsubscribe());
  }, []);

  return models.map(model => model.getState());
}

export default useModels;