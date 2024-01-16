import { useCallback, useEffect, useMemo, useRef, useSyncExternalStore } from 'react';
import useFakeSubscription from './useFakeSubscription';

const takeAll = (state, exact) => exact(state);

const useStorm = (storm, callback = takeAll, { active = true } = {}) => {
  const resultRef = useRef(null);
  const activeRef = useRef(active);
  const subscriptionRef = useRef(null);
  const { fakeSubscriptionRef, fakeSubscription } = useFakeSubscription();

  const fakeState = useCallback(() => resultRef.current, []);
  
  activeRef.current = active;
  useMemo(() => {
    subscriptionRef.current = storm.subscribe((...args) => {
      resultRef.current = callback(...args);
      fakeSubscriptionRef.current();
    });
  }, []);
  
  useEffect(() => subscriptionRef.current, []);

  useSyncExternalStore(
    fakeSubscription,
    fakeState,
  );

  return active ? resultRef.current : resultRef;
};

export default useStorm;
