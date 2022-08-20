<a href="https://www.npmjs.com/package/react-event-storm"><img src="https://img.shields.io/badge/npm-react--event--storm-brightgreen.svg"></a> <a href="https://www.npmjs.com/package/react-event-storm"><img src="https://img.shields.io/npm/v/react-event-storm.svg"></a> [![Publish](https://github.com/event-storm/react-event-storm/actions/workflows/publish.yml/badge.svg?branch=master)](https://github.com/event-storm/react-event-storm/actions/workflows/publish.yml) <a href="https://www.npmjs.com/package/react-event-storm"><img src="https://img.shields.io/bundlephobia/minzip/react-event-storm"> </a> [![codecov](https://codecov.io/gh/event-storm/react-event-storm/branch/dev/graph/badge.svg?token=1AT35BHEIC)](https://codecov.io/gh/event-storm/react-event-storm)

The React event storm is providing a lightweight, minimal abstraction for the [Event Storm](/docs/introduction) library.

## Technical stack

- React ^16.8.0(hooks support)

## Installation

To install the library run:
```bash
# npm
npm i react-event-storm

# yarn
yarn add react-event-storm
```
:::caution
The library is using event storm as a peer dependency, so you need to [install it](/docs/introduction#installation).
:::

### Simple example

```typescript
import { createStorm } from 'event-storm';
import { useStorm } from 'react-event-storm';

const defaultState = {
  name: 'React Event Storm',
}

const storm = createStorm(defaultState);

function Component() {
  const { name } = useStorm(storm);
  return <span>This is {name}</span>
}
```

### See it in action

Examples:
 - [**Typescript**](https://codesandbox.io/s/beautiful-currying-bl9dv)
 - [**React**](https://codesandbox.io/s/intelligent-http-iupz5)

## [Documentation](https://event-storm.github.io/event-storm-documentation/)
