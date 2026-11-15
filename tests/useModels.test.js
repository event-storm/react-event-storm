import { createModel } from 'event-storm';
import { renderHook, act } from '@testing-library/react-hooks';

import { useModels } from 'src';

// Counts a model's live subscriptions through its public `subscribe`, so a test sees what a hook leaves behind.
const countSubscriptions = model => {
  const subscribe = model.subscribe;
  const counter = { live: 0 };
  model.subscribe = (callback, options) => {
    counter.live += 1;
    const unsubscribe = subscribe(callback, options);
    return () => {
      counter.live -= 1;
      unsubscribe();
    };
  };
  return counter;
};

describe('useModels hook', () => {
  test('must match the pattern', () => {
    const initialState = 0;
    const finalState = 10;
    const ageModel = createModel(initialState);

    const { result } = renderHook(() => useModels([ageModel]));

    expect(result.current[0]).toBe(initialState);

    act(() => {
      ageModel.dispatch(finalState);
    });

    expect(result.current[0]).toBe(finalState);
  });

  test('releases its subscriptions when the component unmounts', () => {
    const ageModel = createModel(0);
    const nameModel = createModel('');
    const ages = countSubscriptions(ageModel);
    const names = countSubscriptions(nameModel);

    const { unmount } = renderHook(() => useModels([ageModel, nameModel]));
    expect(ages.live).toBe(1);
    expect(names.live).toBe(1);

    unmount();
    expect(ages.live).toBe(0);
    expect(names.live).toBe(0);
  });

  test('keeps one array while no model changes, so it can be a dependency', () => {
    const ageModel = createModel(1);
    const { result, rerender } = renderHook(() => useModels([ageModel]));
    const first = result.current;

    rerender();
    expect(result.current).toBe(first);

    act(() => {
      ageModel.dispatch(2);
    });
    expect(result.current).not.toBe(first);
    expect(result.current).toEqual([2]);
  });

  test('an inactive reader is not redrawn by a change', () => {
    const ageModel = createModel(1);
    let renders = 0;
    renderHook(() => {
      renders += 1;
      return useModels([ageModel], { active: false });
    });

    act(() => {
      ageModel.dispatch(2);
    });
    expect(renders).toBe(1);
  });
});
