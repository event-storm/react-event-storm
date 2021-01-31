import React from 'react';
import { shallow } from 'enzyme';
import { createModel, publishModel } from 'event-storm';
import { renderHook, act } from '@testing-library/react-hooks';

import { useModels } from '../src';

describe('useModels hook', () => {
  test('must match the pattern', () => {
    const initialState = 0;
    const finalState = 10;
    const ageModel = createModel(initialState);

    const { result } = renderHook(() => useModels(ageModel));

    expect(result.current[0]).toBe(initialState);

    act(() => {
      publishModel(ageModel, finalState);
    });

    expect(result.current[0]).toBe(finalState);

  });

  test('must match the pattern', () => {
    const initialState = 0;
    const finalState = 10;
    const ageModel = createModel(initialState);

    function Example() {
      const [age] = useModels(ageModel);
      return <div>{age}</div>;
    }
    const example = shallow(<Example />);

    expect(example.text()).toBe(String(initialState));;

    publishModel(ageModel, finalState);

    example.setProps({});
    expect(example.text()).toBe(String(finalState));;
  });

  test('must match the pattern', () => {
    const initialState = 0;
    const finalState = 10;
    const ageModel = createModel(initialState);

    function Example() {
      const [age] = useModels(ageModel);
      return <div>{age}</div>;
    }
    const example = shallow(<Example />);

    expect(example.text()).toBe(String(initialState));;

    publishModel(ageModel, finalState);

    example.setProps({});
    expect(example.text()).toBe(String(finalState));;
  });
});
