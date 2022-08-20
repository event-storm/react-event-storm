import { createStorm } from 'event-storm';
import { renderHook, act } from '@testing-library/react-hooks';

import { useStorm } from 'src';

describe('useStorm hook', () => {
  test('must match the pattern', () => {
    const initialState = { age: 19 };
    const finalState = { age: 20 };
    const storm = createStorm(initialState);

    const { result } = renderHook(() => useStorm(storm));

    expect(result.current.age).toBe(initialState.age);

    act(() => {
      storm.dispatch(finalState);
    });

    expect(result.current.age).toBe(finalState.age);
  });

  test('event storm must subscribe to only specified fragment', () => {
    const initialState = { age: 19, name: 'Bob' };
    const storm = createStorm(initialState);
    const finalState = { name: 'Alice' };

    const { result } = renderHook(() => useStorm(storm, (state, subscribe) => subscribe(state.age)));

    expect(result.current).toBe(initialState.age);

    act(() => {
      storm.dispatch(finalState);
    });

    expect(result.current).toBe(initialState.age);
  });

  test('event storm must subscribe to only specified fragment, even when active is set to false', () => {
    const initialState = { age: 19, name: 'Bob' };
    const storm = createStorm(initialState);
    const finalState = { name: 'Alice' };

    const { result } = renderHook(() => useStorm(storm, (state, subscribe) => subscribe(state.age), { active: false }));

    expect(result.current).toEqual({ current: initialState.age });

    act(() => {
      storm.dispatch(finalState);
    });

    expect(result.current).toEqual({ current: initialState.age });
  });
});
