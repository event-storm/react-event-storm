import { useCallback, useRef } from 'react';

import { noop } from '../utils';

const useFakeSubscription = () => {
  const fakeSubscriptionRef = useRef(noop);

  const fakeSubscription = useCallback(cb => {
    fakeSubscriptionRef.current = cb;
    return () => fakeSubscriptionRef.current = noop;
  }, []);

  return { fakeSubscription, fakeSubscriptionRef };
}

export default useFakeSubscription;
