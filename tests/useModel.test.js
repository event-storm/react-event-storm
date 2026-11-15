import { createModel } from 'event-storm';
import { renderHook, act } from '@testing-library/react-hooks';

import { useModel } from 'src';

describe('useModel hook', () => {
  test('reads the whole value without a selector', () => {
    const ageModel = createModel(1);
    const { result } = renderHook(() => useModel(ageModel));

    expect(result.current).toBe(1);
    act(() => {
      ageModel.dispatch(2);
    });
    expect(result.current).toBe(2);
  });

  test('redraws only when the selected part changes', () => {
    const personModel = createModel({ name: 'Ann', age: 1 });
    let renders = 0;
    const { result } = renderHook(() => {
      renders += 1;
      return useModel(personModel, person => person.name);
    });
    expect(result.current).toBe('Ann');

    act(() => {
      personModel.dispatch({ name: 'Ann', age: 2 });
    });
    expect(renders).toBe(1);

    act(() => {
      personModel.dispatch({ name: 'Bob', age: 2 });
    });
    expect(renders).toBe(2);
    expect(result.current).toBe('Bob');
  });

  test('follows a selector that changes between draws', () => {
    const personModel = createModel({ name: 'Ann', age: 1 });
    const { result, rerender } = renderHook(({ field }) => useModel(personModel, person => person[field]), { initialProps: { field: 'name' } });
    expect(result.current).toBe('Ann');

    rerender({ field: 'age' });
    expect(result.current).toBe(1);
  });

  test('releases its subscription when the component unmounts', () => {
    const ageModel = createModel(1);
    const subscribe = ageModel.subscribe;
    let live = 0;
    ageModel.subscribe = (callback, options) => {
      live += 1;
      const unsubscribe = subscribe(callback, options);
      return () => {
        live -= 1;
        unsubscribe();
      };
    };

    const { unmount } = renderHook(() => useModel(ageModel));
    expect(live).toBe(1);
    unmount();
    expect(live).toBe(0);
  });
});
