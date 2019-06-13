# Matchers

Jest uses some common matchers to let you test values in different ways. You can see the full API doc [here](https://jestjs.io/docs/en/expect).

### Common Matchers

The simplest way to test a value is with exact equality.

```js
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});
```

In this code, `expect(2+2)` returns an expectation object. You can call matchers on an expectation object. `toBe` checks for exact equality.

```js
test();
```
