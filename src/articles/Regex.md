# Regular Expressions

Patterns used to match character combinations in strings.

### Constructing a regular expression

```js
const re1 = /abc/;
```

### Simple Regex Patterns

```js
const sample1 = "Hi, do you know your abc's?";
const sample2 = "The latest airplane designs evolved from slabcraft.";
const sample3 = "Grab crab";

const re1 = /abc/;

console.log("Sample 1 has regex 1", re1.test(sample1));
console.log("Sample 2 has regex 1", re1.test(sample2));
console.log("Sample 3 has regex 1", re1.test(sample3));
```

Output

```
Sample 1 has regex 1 true
Sample 2 has regex 1 true
Sample 3 has regex 1 false
```

Simple patterns are constructed of characters for which you want to find a direct match. So, the characters need to appear in the string together and in that order when using a simple regex pattern.

### Special Characters in Regex - Group 1

Backslash `\` is used to denote escaping characters to denote the usage of a special character in the regex.

Special Caret `^` is used to indicate that the expression matches the beginning of the input. If multi line flag is set to true, it also matches immediately after a line break.

```js
const regex = /^A/;

console.log(regex.test("an Apple")); // false
console.log(regex.test("An apple")); // true
```

Dollar `$` is used to indicate that the expression matches the end of the input. Also matches after line break if multi line flag is set to true.

```js
const regex = /poker$/;

console.log(regex.test("He loved playing poker")); // true
console.log(regex.test("Although, poker wasn't a game he was good at")); // false
```

Asterisk `*` indicates that the expression matches in the input 0 or more times.

```js
const regex = /pr*ay/;

console.log(regex.test("Woah, we're half way there")); // false
console.log(regex.test("Woah, livin' on a prayer")); // true
console.log(regex.test("Did you pay for the Bon Jovi concert?")); // true
```

Plus `+` indicates that the expression matches in the input 1 or more times.

```js
const regex = /Woaa+h/;

console.log(regex.test("Woah, livin' on a prayer")); // false
console.log(regex.test("Woaah, livin' on a prayer")); // true
console.log(regex.test("Woaaaaaaaah, livin' on a prayer")); // true
```

Question mark `?` if used immediately after any quantifier, it causes the quantifier to match the fewest possible characters.

### To be continued
