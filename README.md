# React event store

A small React wrapper for [in memory event store](https://github.com/event-storm/event-storm/blob/master/README.md). The provided API is with hooks.
The solution can be used for React application, and for hybrid applications where the UI is not only rendered via React.
As the underlying concept is separating the source of truth from the application processors, this will allow to combine any kind of application makers arround one single peace of information(model).

## Technical stack

- React ^16.8.0(hooks support)
- event-storm ^0.0.8(peer dependency)

## API

- useModel
  Example:
  ```js
  // userModel.js
  const userModel = createModel({});

  // in any component
  const [user] = useModels(userModel);
  ```

  `useModel` will handle subscription, updates, also will unsubscribe the events on component unmount.

## Playground

You can play with a live example in the [codesandbox](https://codesandbox.io/s/nameless-bash-8e2o4)
For **VanillaJs** example [see this link](https://codesandbox.io/s/serene-wood-cjvem)
