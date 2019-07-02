# A Deep Dive into React Internals - Part 2

## ReactCreateEventComponent

### IMPORTS

```js
import type {
  ReactEventComponent,
  ReactEventResponder
} from "shared/ReactTypes";
import { enableEventAPI } from "shared/ReactFeatureFlags";

import { REACT_EVENT_COMPONENT_TYPE } from "shared/ReactSymbols";
```

```js
let hasBadMapPolyfill;
```

### What are polyfills?
