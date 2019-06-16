// @flow

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * 
 "classic": {
    "purple": "#c678dd",
    "error": "#f44747",
    "coral": "#e06c75",
    "whiskey": "#d19a66",
    "chalky": "#e5c07b",
    "lightDark": "#7f848e",
    "dark": "#5c6370",
    "malibu": "#61afef",
    "green": "#98c379",
    "fountainBlue": "#56b6c2",
    "invalid": "#ffffff"
  },
  "vivid": {
    "purple": "#d55fde",
    "error": "#f44747",
    "coral": "#ef596f",
    "whiskey": "#d19a66",
    "chalky": "#e5c07b",
    "lightDark": "#7f848e",
    "dark": "#5c6370",
    "malibu": "#61afef",
    "green": "#89ca78",
    "fountainBlue": "#2bbac5",
    "invalid": "#ffffff"
  }

 */

exports.default = {
  'code[class*="language-"]': {
    color: "#e06c75",
    direction: "ltr",
    fontFamily: "Fira Code",
    fontVariantLigatures: "contextual",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none"
  },
  'pre[class*="language-"]': {
    color: "#7f848e",
    direction: "ltr",
    fontFamily: "Fira Code",
    fontVariantLigatures: "contextual",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: ".5em 0",
    overflow: "auto",
    background: "#282c34"
  },
  'pre[class*="language-"]::-moz-selection': {
    color: "inherit",
    background: "rgba(33,66,131,.85)"
  },
  'pre[class*="language-"] ::-moz-selection': {
    color: "inherit",
    background: "rgba(33,66,131,.85)"
  },
  'code[class*="language-"]::-moz-selection': {
    color: "inherit",
    background: "rgba(33,66,131,.85)"
  },
  'code[class*="language-"] ::-moz-selection': {
    color: "inherit",
    background: "rgba(33,66,131,.85)"
  },
  'pre[class*="language-"]::selection': {
    color: "inherit",
    background: "rgba(33,66,131,.85)"
  },
  'pre[class*="language-"] ::selection': {
    color: "inherit",
    background: "rgba(33,66,131,.85)"
  },
  'code[class*="language-"]::selection': {
    color: "inherit",
    background: "rgba(33,66,131,.85)"
  },
  'code[class*="language-"] ::selection': {
    color: "inherit",
    background: "rgba(33,66,131,.85)"
  },
  ':not(pre) > code[class*="language-"]': {
    background: "#282c34",
    padding: ".1em",
    borderRadius: ".3em"
  },
  comment: {
    color: "#5c6370"
  },
  prolog: {
    color: "#5c6370"
  },
  cdata: {
    color: "#5c6370"
  },
  delimiter: {
    color: "#c678dd"
  },
  boolean: {
    color: "#c678dd"
  },
  keyword: {
    color: "#c678dd"
  },
  selector: {
    color: "#c678dd"
  },
  important: {
    color: "#c678dd"
  },
  atrule: {
    color: "#c678dd"
  },
  operator: {
    color: "#287bde"
  },
  punctuation: {
    color: "#7f848e"
  },
  "attr-name": {
    color: "#d19a66"
  },
  tag: {
    color: "#e06c75"
  },
  "tag .punctuation": {
    color: "#61afef"
  },
  doctype: {
    color: "#61afef"
  },
  builtin: {
    color: "#61afef"
  },
  entity: {
    color: "#d19a66"
  },
  number: {
    color: "#d19a66"
  },
  symbol: {
    color: "#d19a66"
  },
  property: {
    color: "#9876aa"
  },
  constant: {
    color: "#9876aa"
  },
  variable: {
    color: "#9876aa"
  },
  string: {
    color: "#98c379"
  },
  char: {
    color: "#98c379"
  },
  "attr-value": {
    color: "#a5c261"
  },
  "attr-value .punctuation": {
    color: "#a5c261"
  },
  "attr-value .punctuation:first-child": {
    color: "#7f848e"
  },
  url: {
    color: "#287bde",
    textDecoration: "underline"
  },
  function: {
    color: "#61afef"
  },
  regex: {
    background: "#364135"
  },
  bold: {
    fontWeight: "bold"
  },
  italic: {
    fontStyle: "italic"
  },
  inserted: {
    background: "#294436"
  },
  deleted: {
    background: "#484a4a"
  },
  "code.language-css .token.property": {
    color: "#7f848e"
  },
  "code.language-css .token.property + .token.punctuation": {
    color: "#7f848e"
  },
  "code.language-css .token.id": {
    color: "#e5c07b"
  },
  "code.language-css .token.selector > .token.class": {
    color: "#e5c07b"
  },
  "code.language-css .token.selector > .token.attribute": {
    color: "#e5c07b"
  },
  "code.language-css .token.selector > .token.pseudo-class": {
    color: "#e5c07b"
  },
  "code.language-css .token.selector > .token.pseudo-element": {
    color: "#e5c07b"
  }
};
