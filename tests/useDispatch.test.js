import { createStorm } from 'event-storm';
import { renderHook, act } from '@testing-library/react-hooks';

import { useDispatch } from 'src';

describe('useDispatch hook', () => {
  test('dispatch must update the state', async () => {
    const initialState = { age: 19 };
    const finalState = { age: 20 };
    const storm = createStorm(initialState);

    const { result } = renderHook(() => useDispatch(storm));

    expect(result.current).toBeInstanceOf(Function);

    act(() => {
      result.current(finalState);
    });

    expect(storm.getState()).toEqual(finalState);
  });
});
