# A Deep Dive into React Internals - Part 2

## createRef

```jsx
// an immutable object with a single mutable value
export function createRef(): RefObject {
  const refObject = {
    current: null
  };
  if (__DEV__) {
    Object.seal(refObject);
  }
  return refObject;
}
```

`__DEV__` => global variable to track whether development or production

`Object.seal()` => This method seals an object preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.

```jsx
export type RefObject = {|
  current: any
|};
```

## ReactCreateEventComponent

```js
import type {
  ReactEventComponent,
  ReactEventResponder
} from "shared/ReactTypes";
import { enableEventAPI } from "shared/ReactFeatureFlags";

import { REACT_EVENT_COMPONENT_TYPE } from "shared/ReactSymbols";
```

### What are polyfills? (from MDN docs)

A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

The reason for why polyfills are not used exclusively is for better functionality and better performance. Native implementations of APIs can do more and are faster than polyfills.

```js
let hasBadMapPolyfill;
```

```js
if (__DEV__) {
  hasBadMapPolyfill = false;
  try {
    const frozenObject = Object.freeze({});
    const testMap = new Map([[frozenObject, null]]);
    const testSet = new Set([frozenObject]);
    // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.
    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
    // TODO: Consider warning about bad polyfills
    hasBadMapPolyfill = true;
  }
}
```

Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application.

```js
export function createEventComponent(
  responder: ReactEventResponder,
  displayName: string
): ?ReactEventComponent {
  if (enableEventAPI) {
    // We use responder as a Map key later on. When we have a bad
    // polyfill, then we can't use it as a key as the polyfill tries
    // to add a property to the object.
    if (__DEV__ && !hasBadMapPolyfill) {
      Object.freeze(responder);
    }
    const eventComponent = {
      $$typeof: REACT_EVENT_COMPONENT_TYPE,
      displayName: displayName,
      props: null,
      responder: responder
    };
    if (__DEV__) {
      Object.freeze(eventComponent);
    }
    return eventComponent;
  }
}
```

## ReactChildren

```js
import invariant from "shared/invariant";
import warning from "shared/warning";
import {
  getIteratorFn,
  REACT_ELEMENT_TYPE,
  REACT_PORTAL_TYPE
} from "shared/ReactSymbols";

import { isValidElement, cloneAndReplaceKey } from "./ReactElement";
import ReactDebugCurrentFrame from "./ReactDebugCurrentFrame";
```

What are these separators for?

```js
const SEPARATOR = ".";
const SUBSEPARATOR = ":";
```

Also, what key are they trying to escape here?

Probably similar to the key we provide when mapping through an array to generate html elements for each item in the array.

```js
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  const escapeRegex = /[=:]/g;
  const escaperLookup = {
    "=": "=0",
    ":": "=2"
  };
  const escapedString = ("" + key).replace(escapeRegex, function(match) {
    return escaperLookup[match];
  });

  return "$" + escapedString;
}
```

### To be continued
