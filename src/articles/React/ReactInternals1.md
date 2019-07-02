# A Deep Dive into React Internals

Understanding the Source Code: Forked on June 16 2019

ReactVersion: 16.8.6

## React Base Classes

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

The component function takes in props, context and an updater as params. Where do these props come from? The renderer?

```jsx
const emptyObject = {};
if (__DEV__) {
  Object.freeze(emptyObject);
}
```

`Object.freeze()` => A frozen object can no longer be changed, freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. Freeze returns the same object that was passed in.

`Why are we using freeze and seal? And why __DEV__ only specifically?`

```jsx
Component.prototype.isReactComponent = {};
```

Prototypes => property of the Object constructor
Also the end of a prototype chain. It is not writable, configurable or enumerable. A typical object inherits properties and methods from Object.prototype, although these properties may be overridden.

Prototypes in javascript help with Object Oriented Programming.

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

On logging the imported Component class's prototype, we get the following output.

```jsx
const { Component } = require("react");

console.log(Component.prototype);
// output =>
Component {
  isReactComponent: {},
  setState: [Function],
  forceUpdate: [Function]
}
```

On logging just the class, we get => `[Function: Component]`

```jsx
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

Important notes for setState:

- Treat "this.state" as immutable and always use "setState" to mutate state
- partialState can either be of type object, function or null (Need to experiment with function and null to see what happens)
- what is invariant? its coming from:

`import invariant from 'shared/invariant';`

- updated is being set in as a class property as shown below

```jsx
// We initialize the default updater but the real one gets injected by the
// renderer.
this.updater = updater || ReactNoopUpdateQueue;
```

Force Update

```jsx
Component.prototype.forceUpdate = function(callback) {
  this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
};
```

This forces an update and should be invoked only when it is known with certainty that we are NOT in a DOM transaction.

You MAY want to call this when some deep aspect of component's state has changed but `setState` was not called.

Does not invoke `shouldComponentUpdate` but invokes `componentWillUpdate` and `componentDidUpdate`.

### PureComponent

```jsx
/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

const pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
Object.assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;
```

PureComponent is similar to Component except that Component does not have `shouldComponentUpdate()` but PureComponent implements it with a shallow prop and state comparison.

If your props contain deeply nested data structures, using PureComponent can produce false negatives. Only extend PureComponent for simple props and state.

Alternatively you can use the `forceUpdate()` method when you know deep data structures have changed.

Alternatively, you can also consider using immutable objects to facilitate faster comparisons of nested data.

Furthermore, PureComponent's `shouldComponentUpdate()` skips prop updates for the whole component subtree. So make sure all children components are also pure.
