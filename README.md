# React event store

A small React wrapper for [in memory event store](https://github.com/event-storm/event-storm/blob/master/README.md). The provided API is with hooks.
The solution can be used for React applications, and for hybrid applications where the UI is not only rendered via React.
As the underlying concept is separating the source of truth from the application UI renderer,
**this can be used with any kind of application arround one single peace of information(model)**.

## Technical stack

- React ^16.8.0(hooks support)
- event-storm ^0.0.8(peer dependency)

## API

- useModel
  React wrapper provides a simple hook that wraps the `subscribe` method of the given models.
  **It will automatically subscribe the component to model changes**.

  Example:

  ```js
  // models.js
  export const userModel = createModel({ name: 'John Doe' });

  // component.js
  import { createModel } from 'event-storm';
  import { useModels } from 'react-event-storm';

  import { userModel } from './models';

  function AnyComponent() {
    const [user] = useModels(userModel);

    return (
      <div>{user.name}</div>
    )
  }
  ```

  **It can receive multiple arguments**.
  Example:

  ```js
  // models.js
  export const userModel = createModel({ name: 'John Doe' });
  export const ageModel = createModel('unknown');

  // component.js
  import { createModel } from 'event-storm';
  import { useModels } from 'react-event-storm';

  import { userModel, ageModel } from './models';

  function AnyComponent() {
    const [user, age] = useModels(userModel, ageModel);

    return (
      <>
        <div>{user.name}</div>
        <span>{age}</age>
      </>
    )
  }
  ```

  **NOTE: `useModel` will automatically unsubscribe from models on component unmount.**

## Playground

Examples:

- [**React**](https://codesandbox.io/s/nameless-bash-8e2o4)
- [**VanillaJs**](https://codesandbox.io/s/serene-wood-cjvem)
