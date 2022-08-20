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
});
