import { createModel } from 'event-storm';
import { renderHook, act } from '@testing-library/react-hooks';

import { useModels } from 'src';

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
});
