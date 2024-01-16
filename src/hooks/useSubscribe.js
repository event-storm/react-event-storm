import { useMemo, useRef, useSyncExternalStore, useCallback } from 'react';

import useFakeSubscription from './useFakeSubscription';

const useSubscribe = (models, active = true) => {
  const { fakeSubscriptionRef, fakeSubscription } = useFakeSubscription();
  const resultRef = useRef(null);

  useMemo(() => {
    const subscriptions = models.map(model => model.subscribe(() => {
      if (active) {
        resultRef.current = null;
        fakeSubscriptionRef.current();
      }
    }));
    return () => subscriptions.map(unsubscribe => unsubscribe());
  }, [...models, active]);

  const fakeState = useCallback(() => {
    if (!resultRef.current) {
      resultRef.current = models.map(model => model.getState());
    }

    return resultRef.current;
  }, [...models]);

  useSyncExternalStore(
    fakeSubscription,
    fakeState
  );
}

export default useSubscribe;
