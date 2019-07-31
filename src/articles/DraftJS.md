# Getting familiar with Draft JS

Draft.js is a framework for building rich text editors in React, powered by an immutable model and abstracting over cross-browser differences.

```
yarn add draft-js
```

It has dependancies on react and react-dom.

### Basic Usage

```js
const DraftJS = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <div>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
};
```

### The Editor

This is a controlled ContentEditable component. Controlled inputs comprise of (1) value (to represent state) (2) onChange handler (to update state).

The state is represented as a single immutable `EditorState` object. This object is a complete snapshot of the state of the editor, including contents, cursor, and undo/redo history. All changes to content and selection within the editor will create new EditorState objects. Note that this remains efficient due to data persistence across immutable objects.

Since the top-level EditorState is responsible for maintaining the state, you have the freedom to mutate this object any way you see fit.

### RichUtils handleKeyCommand

We can use RichUtils to handle core key commands such as bold (ctrl + b), italic (ctrl + i) etc.

```js
import { RichUtils } from "draft-js";

const handleKeyCommand = useCallback((command, editorState) => {
  const newState = RichUtils.handleKeyCommand(editorState, command);
  if (newState) {
    setEditorState(newState);
    return "handled";
  }
  return "not handled";
}, []);

return (
  <Editor
    editorState={editorState}
    onChange={setEditorState}
    handleKeyCommand={handleKeyCommand}
  />
);
```

We can also use custom divs to control the styling within the editor.

```js
const DraftJS = () => {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const controlStyles = useCallback((repVal, trueVal, setFn) => {
    if (repVal && !trueVal) setFn(false);
    if (!repVal && trueVal) setFn(true);
  }, []);

  useEffect(() => {
    const inlineStyles = editorState.getCurrentInlineStyle().toJS();
    console.log(inlineStyles);
    const checkBold = inlineStyles.includes("BOLD");
    const checkItalic = inlineStyles.includes("ITALIC");
    const checkUnderline = inlineStyles.includes("UNDERLINE");
    controlStyles(isBold, checkBold, setIsBold);
    controlStyles(isItalic, checkItalic, setIsItalic);
    controlStyles(isUnderline, checkUnderline, setIsUnderline);
  }, [editorState]);

  const stylingClick = useCallback(
    (e: any, style: string) => {
      e.preventDefault();
      const newState = RichUtils.toggleInlineStyle(editorState, style);
      setEditorState(newState);
    },
    [editorState, setEditorState]
  );

  return (
    <EditorContainer>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
      />
      <EditorOptions>
        <EditorOption
          onMouseDown={e => stylingClick(e, "BOLD")}
          isSelected={isBold}
        >
          B
        </EditorOption>
        <EditorOption
          onMouseDown={e => stylingClick(e, "ITALIC")}
          isSelected={isItalic}
        >
          I
        </EditorOption>
        <EditorOption
          onMouseDown={e => stylingClick(e, "UNDERLINE")}
          isSelected={isUnderline}
        >
          U
        </EditorOption>
      </EditorOptions>
    </EditorContainer>
  );
};
```

### The Entity System

Draft JS uses the entity system for annotating ranges of text with metadata. Entities introduce levels of richness such as styled text, mentions, links and embedded content. They are stored in the ContentState record.

An entity is an object that represents the metadata for a range of text within a Draft editor and it has 3 properties:

- type: a string that indicates what kind of entity it is
- mutability: denotes the behavior of a range of text
- data: optional object containing metadata that is relevant to the entity
