import { useCallback, useRef, useSyncExternalStore } from 'react';

const noop = () => {};

const sameStates = (previous, next) => previous.length === next.length && previous.every((state, index) => Object.is(state, next[index]));

// Subscribes through React's own store subscription, so React releases every model's subscription when the
// component unmounts (subscribing inside `useMemo` never did), and a read can never tear between models.
const useModels = (models, { active = true } = {}) => {
  const snapshot = useRef(null);

  const subscribe = useCallback(onChange => {
    if (!active) return noop;
    const unsubscribes = models.map(model => model.subscribe(onChange));
    return () => unsubscribes.forEach(unsubscribe => unsubscribe());
  }, [active, ...models]);

  // One array for as long as no model changes: React compares snapshots by identity, and a reader may keep it as
  // a dependency.
  const getSnapshot = () => {
    const states = models.map(model => model.getState());
    if (!snapshot.current || !sameStates(snapshot.current, states)) snapshot.current = states;
    return snapshot.current;
  };

  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
};

export default useModels;
