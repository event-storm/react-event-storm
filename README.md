<a href="https://www.npmjs.com/package/react-event-storm"><img src="https://img.shields.io/badge/npm-react--event--storm-brightgreen.svg"></a> <a href="https://www.npmjs.com/package/react-event-storm"><img src="https://img.shields.io/npm/v/react-event-storm.svg"></a> [![Publish](https://github.com/event-storm/react-event-storm/actions/workflows/publish.yml/badge.svg?branch=master)](https://github.com/event-storm/react-event-storm/actions/workflows/publish.yml) <a href="https://www.npmjs.com/package/react-event-storm"><img src="https://img.shields.io/bundlephobia/minzip/react-event-storm"> </a>


# React event store

A small React wrapper for [in memory event store](https://github.com/event-storm/event-storm/blob/master/README.md). The provided API is with hooks.

## Technical stack

- React ^16.8.0(hooks support)

## API

- Subscribing to store updates
  **useStore**
  React wrapper provides a simple hook that wraps the store's `subscribe` method.
  **It will automatically unsubscribe the component from the store changes on unmount**.

  ```js
  import { createStore } from 'event-storm';
  import { useStore } from 'react-event-storm';

  const store = createStore({
    taxes: 20,
    grossSalary: 100_000,
  });

  function AnyComponent() {
    const { taxes } = useStore(store);

    return (
      <div>{taxes}</div>
    );
  }
  ```

  NOT RECOMMENDED: Do not use store as an argument to hooks dependency

  ```js

  import { createStore } from 'event-storm';
  import { useStore } from 'react-event-storm';

  const store = createStore({
    taxes: 20,
    grossSalary: 100_000,
  });

  function AnyComponent() {
    const { taxes } = useStore(store);

    /* The following way of using the store is not recommended. Each render will update this effect.
      useEffect(() => {
        console.log(store.taxes);
      }, [store]);
    */

   // correct usage
    useEffect(() => {
      console.log(taxes);
    }, [taxes]);

    return (
      <div>{taxes}</div>
    );
  }
  ```
- Updating the store
  **usePublish**
   ```js
  import { createStore } from 'event-storm';
  import { useStore, usePublish } from 'react-event-storm';

  const store = createStore({
    taxes: 20,
    grossSalary: 100_000,
  });

  function AnyComponent() {
    const { taxes } = useStore(store);
    const publish = usePublish(store);

    return (
      <div onClick={() => publish({ taxes: 30 })}>
        {taxes}
      </div>
    );
  }
  ```

  Advan
- Advanced usage
  You can also subscribe to exact models you want to
  ```js
  import { createModel } from 'event-storm';
  import { useModels } from 'react-event-storm';

  const isPopupVisible = createModel(true);
  const age = createModel(1);

  function AnyComponent() {
    const [popupVisible, ageValue] = useModels(isPopupVisible, age);
    return (
      <div>
        {isPopupVisible ? 'close' : 'open'}
        {age}
      </div>
    );
  }
  ```

## Usefull tips

The provided hooks will work for any store instance. Some boilerplate for wrapping it with a store instance
to avoid importing store everywhere:
```js
import { useStore as useBaseStore, usePublish as useBasePublish } from 'react-event-storm';
import { createStore } from 'event-storm';

const defaultState = {
  posts: [],
  user: null,
  comments: [],
  isLoggedIn: ({ user }) => !!user,
};

const store = createStore(defaultState);

export const useStore = () => useBaseStore(store);
export const usePublish = () => useBasePublish(store);
export default store;
```

## Playground

Examples:

- [**React**](https://codesandbox.io/s/intelligent-http-iupz5)
- [**VanillaJs**](https://codesandbox.io/s/serene-wood-cjvem)
