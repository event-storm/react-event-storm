import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'event-storm';
import { renderHook, act } from '@testing-library/react-hooks';

import { useStore } from '../src';

describe('useModels hook', () => {
  test('must match the pattern', () => {
    const initialState = { age: 19 };
    const finalState = { age: 20 };
    const store = createStore(initialState);

    const { result } = renderHook(() => useStore(store));

    expect(result.current.age).toBe(initialState.age);

    act(() => {
      store.publish(finalState);
    });

    expect(result.current.age).toBe(finalState.age);
  });
});
