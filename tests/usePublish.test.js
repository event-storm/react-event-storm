import { createStorm } from 'event-storm';
import { renderHook, act } from '@testing-library/react-hooks';

import { usePublish } from 'src';

describe('useModels hook', () => {
  test('must match the pattern', () => {
    const initialState = { age: 19 };
    const finalState = { age: 20 };
    const storm = createStorm(initialState);

    const { result } = renderHook(() => usePublish(storm));

    expect(result.current).toBeInstanceOf(Function);

    act(() => {
      result.current(finalState);
    });

    expect(storm.getState()).toEqual(finalState);
  });
});
