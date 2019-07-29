## Forward Ref

Ref forwarding is a technique for automatically passing a ref through a component to one of its children. It is an opt-in feature that lets some components take a ref they receive, and pass it further down (in other words, “forward” it) to a child.

```js
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```

The second ref argument only exists when you define a component with React.forwardRef call. Regular function or class components don’t receive the ref argument, and ref is not available in props either.

<hr/>

### Refs in HOC

Refs will not get passed through a HOC along with props. That’s because ref is not a prop. Like key, it’s handled differently by React. If you add a ref to a HOC, the ref will refer to the outermost container component, not the wrapped component.

```js
function logProps(Component) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log("old props:", prevProps);
      console.log("new props:", this.props);
    }

    render() {
      const { forwardedRef, ...rest } = this.props;

      // Assign the custom prop "forwardedRef" as a ref
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  // Note the second param "ref" provided by React.forwardRef.
  // We can pass it along to LogProps as a regular prop, e.g. "forwardedRef"
  // And it can then be attached to the Component.
  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}
```

We can explicitly forward refs to the inner FancyButton component using the React.forwardRef API. React.forwardRef accepts a render function that receives props and ref parameters and returns a React node.

<hr/>

### SOURCE CODE - forwardRef.js

```js
import { REACT_FORWARD_REF_TYPE, REACT_MEMO_TYPE } from "shared/ReactSymbols";

import warningWithoutStack from "shared/warningWithoutStack";

export default function forwardRef<Props, ElementType: React$ElementType>(
  render: (props: Props, ref: React$Ref<ElementType>) => React$Node
) {
  if (__DEV__) {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      warningWithoutStack(
        false,
        "forwardRef requires a render function but received a `memo` " +
          "component. Instead of forwardRef(memo(...)), use " +
          "memo(forwardRef(...))."
      );
    } else if (typeof render !== "function") {
      warningWithoutStack(
        false,
        "forwardRef requires a render function but was given %s.",
        render === null ? "null" : typeof render
      );
    } else {
      warningWithoutStack(
        // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
        render.length === 0 || render.length === 2,
        "forwardRef render functions accept exactly two parameters: props and ref. %s",
        render.length === 1
          ? "Did you forget to use the ref parameter?"
          : "Any additional parameter will be undefined."
      );
    }

    if (render != null) {
      warningWithoutStack(
        render.defaultProps == null && render.propTypes == null,
        "forwardRef render functions do not support propTypes or defaultProps. " +
          "Did you accidentally pass a React component?"
      );
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render
  };
}
```

<hr/>
<br/>
<br/>

```js
if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
  warningWithoutStack(
    false,
    "forwardRef requires a render function but received a `memo` " +
      "component. Instead of forwardRef(memo(...)), use " +
      "memo(forwardRef(...))."
  );
}
```

Check if there is something to render and if its a memoized component, then throw out a warning message. So, basically pass in a forwardedRef component to be memoized and not the other way around.

<hr/>

```js
if (typeof render !== "function") {
  warningWithoutStack(
    false,
    "forwardRef requires a render function but was given %s.",
    render === null ? "null" : typeof render
  );
}
```

Check for render function.

<hr/>

```js
warningWithoutStack(
  // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
  render.length === 0 || render.length === 2,
  "forwardRef render functions accept exactly two parameters: props and ref. %s",
  render.length === 1
    ? "Did you forget to use the ref parameter?"
    : "Any additional parameter will be undefined."
);
```

Check if render function has 0 or 2 parameters. If not, then throw appropriate warnings.

<hr/>

```js
warningWithoutStack(
  render.defaultProps == null && render.propTypes == null,
  "forwardRef render functions do not support propTypes or defaultProps. " +
    "Did you accidentally pass a React component?"
);
```

Does this mean that when you use forwardRef, you cannot use propTypes or defaultProps? That doesnt make sense?!!
