# A Deep Dive into React Internals

Understanding the Source Code: Dated June 16 2019

ReactVersion: 16.8.6

### createRef

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

### Component

```jsx
/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}
```

##### Prototypes

Prototypes => property of the Object constructor
Also the end of a prototype chain. It is not writable, configurable or enumerable. A typical object inherits properties and methods from Object.prototype, although these properties may be overridden.

Prototypes in javascript help with Object Oriented Programming.

##### Why Prototypes?

```jsx
// Object Creation using constructors

function SuperHero(fName, lName) {
  this.fName = fName;
  this.lName = lName;

  this.getName = () => {
    return this.fName + " " + this.lName;
  };
}

const hero1 = new SuperHero("Bruce", "Wayne");
const hero2 = new SuperHero("Barry", "Allen");

console.log({ hero1: hero1.getName(), hero2: hero2.getName() });
```

When we use a constructor as shown above to create object instances, each of those objects will have its own copy of properties and methods. Clearly, such separate instances cause wastage of memory.

When a function is created in JavaScript, the JS engine adds a prototype property to the function.

```jsx
Component.prototype.isReactComponent = {};
```

```jsx
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function(partialState, callback) {
  invariant(
    typeof partialState === "object" ||
      typeof partialState === "function" ||
      partialState == null,
    "setState(...): takes an object of state variables to update or a " +
      "function which returns an object of state variables."
  );
  this.updater.enqueueSetState(this, partialState, callback, "setState");
};
```

```jsx
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function(callback) {
  this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
};
```
