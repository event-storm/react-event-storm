import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/with-selector';
import useFakeSubscription from './useFakeSubscription';

const takeAll = (state, exact) => exact(state);
const mirror = _ => _;

const useStorm = (storm, callback = takeAll, { active = true } = {}) => {
  const resultRef = useRef(null);
  const activeRef = useRef(active);
  const subscriptionRef = useRef(null);
  const { fakeSubscriptionRef, fakeSubscription } = useFakeSubscription();

  const fakeIsEqual = useCallback(() => {
    return !activeRef.current;
  }, []);
  const fakeState = useCallback(() => resultRef.current, []);
  
  activeRef.current = active;
  useMemo(() => {
    subscriptionRef.current = storm.subscribe((...args) => {
      resultRef.current = callback(...args);
      fakeSubscriptionRef.current();
    });
  }, []);
  
  useEffect(() => subscriptionRef.current, []);

  useSyncExternalStoreWithSelector(
    fakeSubscription,
    fakeState,
    null,
    mirror,
    fakeIsEqual,
  );

  return active ? resultRef.current : resultRef;
};

export default useStorm;
