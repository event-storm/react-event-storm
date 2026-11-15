import { useCallback, useRef, useSyncExternalStore } from 'react';

const noop = () => {};
const whole = state => state;

// One model, read through a selector: React redraws the reader only when what the selector returns changes
// (`Object.is`), so a reader of one field of a model replaced whole is not redrawn by the others. A selector that
// builds a new object each call redraws on every change of the model.
const useModel = (model, select = whole, { active = true } = {}) => {
  const selected = useRef(null);
  const latestSelect = useRef(select);
  latestSelect.current = select;

  const subscribe = useCallback(onChange => (active ? model.subscribe(onChange) : noop), [model, active]);

  // Selects again only when the state or the selector changed, so React's repeated reads within one draw agree.
  const getSnapshot = () => {
    const state = model.getState();
    const previous = selected.current;
    if (previous && Object.is(previous.state, state) && previous.select === latestSelect.current) return previous.value;
    const value = latestSelect.current(state);
    selected.current = { state, select: latestSelect.current, value };
    return value;
  };

  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
};

export default useModel;
