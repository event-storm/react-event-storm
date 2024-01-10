import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/with-selector';

const takeAll = (state, exact) => exact(state);
const mirror = _ => _;

const useStorm = (storm, callback = takeAll, { active = true } = {}) => {
  const resultRef = useRef(null);
  const activeRef = useRef(active);
  const subscriptionRef = useRef(null);

  const fakeSubscription = useCallback(() => {
  }, []);
  const fakeIsEqual = useCallback(() => {
    return !activeRef.current;
  }, []);
  const fakeState = useCallback(() => resultRef.current, []);
  
  activeRef.current = active;
  useMemo(() => {
    subscriptionRef.current = storm.subscribe((...args) => {
      resultRef.current = callback(...args);
      fakeSubscription();
    });
  }, []);
  
  useEffect(() => subscriptionRef.current, []);

  useSyncExternalStoreWithSelector(
    storm.subscribe,
    fakeState,
    null,
    mirror,
    fakeIsEqual,
  );

  return active ? resultRef.current : resultRef;
};

export default useStorm;
