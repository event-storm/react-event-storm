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

  test('model publish must update the component', () => {
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

  test('not subscribed model must not update the component', () => {
    const initialState = 0;
    const ageModel = createModel(initialState);
    const heightModel = createModel('tall');

    function Example() {
      const [age] = useModels(ageModel);
      return <div>{age}</div>;
    }
    const example = shallow(<Example />);

    expect(example.text()).toBe(String(initialState));;

    publishModel(heightModel, 'super-tall');

    example.setProps({});
    expect(example.text()).toBe(String(initialState));;
  });
});
