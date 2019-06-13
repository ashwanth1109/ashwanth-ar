# Snapshot Testing With Jest

### Dev Dependencies

- jest
- babel-jest
- @babel/preset-env
- @babel/preset-react
- react-test-renderer

### What are snapshot tests?

Snapshot tests help ensure that your UI does not change unexpectedly. In such test cases, the app renders a component, takes a snapshot and compares it with the reference snapshot file stored alongside the test file.

The test will fail if the two snapshots do not match which happens when -

1. change is unexpected
2. reference snapshot needs to be updated to the new version of the UI component

The idea is to quickly generate a serializable value for your react tree as opposed to building the entire app for rendering the graphical UI.

### Snapshot Scope

Snapshots are directly scoped to the data you render. This implies that even if any other file has missing props, it will still pass the test as the test is only scoped to the data supplied in the test file.

Alternatively, you can render the same component with different props in other snapshot tests. These tests will not affect each other as they are not aware of each other.

### Why Snapshot Test?

A react engineer's biggest concern is that a component changes unexpectedly. The main problems that such end-to-end snapshot integration tests solve are as follows:

- Fast iteration speed - tests are run on a command line runner which means no build, spawn browsers, load a page and so on. This means tests let you iterate at a much faster pace.

- Debugging - It's a lot easier to step into the code of an integration test in JS instead of trying to recreate the screenshot test scenario and debugging what happened in the visual diff.
