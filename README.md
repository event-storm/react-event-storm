<a href="https://www.npmjs.com/package/react-event-storm"><img src="https://img.shields.io/badge/npm-react--event--storm-brightgreen.svg"></a> <a href="https://www.npmjs.com/package/react-event-storm"><img src="https://img.shields.io/npm/v/react-event-storm.svg"></a> [![Publish](https://github.com/event-storm/react-event-storm/actions/workflows/publish.yml/badge.svg?branch=master)](https://github.com/event-storm/react-event-storm/actions/workflows/publish.yml) <a href="https://www.npmjs.com/package/react-event-storm"><img src="https://img.shields.io/bundlephobia/minzip/react-event-storm"> </a>


# React event store

A small React wrapper for [in memory event store](https://github.com/event-storm/event-storm/blob/master/README.md). The provided API is with hooks.

## Technical stack

- React ^16.8.0(hooks support)

## API

**useStore**
## What is a Subscription

Generally saying subscription is receiving some information(maybe something) over some agreement. In the case of computer science, there are some patterns based on this logic(mainly it is popular in event-driven design systems).
As you can expect the library is providing a subscription functionality to allow subscription on store segments information.

## The problem

Imagine a react application. You have a component and it is subscribed to store. It is using `sizes` and `cards` properties.
The `cards` are used to render a list. Let's imagine you want to save in backend the provided `sizes` for clicked `card`. So, the `sizes` information is used whenever you are clicking on a particular `card`. In most store managers(e.g. Overmind, Redux) your component will be updated on `sizes` change even if the user will never click to the list.
To avoid unnecassary renders, you'll need to directly access the store in your `card`'s click event handler. Which is most probably not the solution you're looking for. With the workarround you'll get store usage in a "react-way" as usual, also in a "none react-way"(accessing the store diretly, not via `useStore` or some other hook). Also, worth nothing that you'll have components where you need more than one handler. So you'll need to duplicate the code that accesses the store.

## The Solution

The `event-storm` is presenting 3 levels of subscription(via **useStore**):
- Active subscription
- Passive subscription
- Condition-based subscription

#### Active Subscription
  This is a regular subscription. Whenever you are using any key from the store like in the example below, you'll receive any update on that keys.
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
````
  This is the same as:
```js
import { createStore } from 'event-storm';
import { useStore } from 'react-event-storm';

const store = createStore({
  taxes: 20,
  grossSalary: 100_000,
});

function AnyComponent() {
  const { taxes } = useStore(store, { active: true });

  return (
    <div>{taxes}</div>
  );
}
````
#### Passive subscription
  This option allows you to access any store key without getting you component rerendered on the particular keys' updates. **It is guaranteed that whenever you'll use the store values they'll be up to date(fresh values)**.
```js
import { createStore } from 'event-storm';
import { useStore } from 'react-event-storm';

const store = createStore({
  taxes: 20,
  grossSalary: 100_000,
});

function AnyComponent() {
  const { taxes } = useStore(store, { active: false });

  const onClick = () => {
    console.log(taxes);
  }

  return (
    <button onClick={onClick}>Click me</button>
  );
}
```
#### Condition-based subscription
  What is a condition-based subscription? The updates on the keys will not update the component until the provided condition will be truthy.
  Whenever `active` option can becomes `true` during runtime, the subcription becomes active. This means, starting from that point, your component
  will be rerendered on the key's updates. **With this feature, you are controlling your subscription.**
```js
import { useState } from 'react';
import { createStore } from 'event-storm';
import { useStore, usePublish } from 'react-event-storm';

const store = createStore({
  taxes: 20,
  grossSalary: 100_000,
});
function App() {
  const [loading, setLoading] = useState(0);
  const { cards, sizes } = useStore(store, { active: loading });

  return loading ? <Loading /> : cards.map(card => <Card sizes={sizes} />);
}
```
  You can change the value of `active` option from `true` to `false` or vise versa. Whenever it'll be `false` your component will not be updated for the used keys' changes.

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
### Updating the store
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

### Advanced usage
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

export const useStore = options => useBaseStore(store, options);
export const usePublish = () => useBasePublish(store);
export default store;
```
## Playground

Examples:

- [**React**](https://codesandbox.io/s/intelligent-http-iupz5)
- [**VanillaJs**](https://codesandbox.io/s/serene-wood-cjvem)
