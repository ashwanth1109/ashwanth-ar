// @flow

import React, { useState, useCallback, useEffect, useRef } from "react";
import { Editor, EditorState, RichUtils, ContentState } from "draft-js";

import {
  EditorContainer,
  Display,
  EditorOptions,
  EditorOption
} from "./styles";

const DraftJS = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const editorRef: { current: any } = useRef();

  const controlStyles = useCallback((repVal, trueVal, setFn) => {
    if (repVal && !trueVal) setFn(false);
    if (!repVal && trueVal) setFn(true);
  }, []);

  useEffect(() => {
    const inlineStyles = editorState.getCurrentInlineStyle().toJS();
    const checkBold = inlineStyles.includes("BOLD");
    const checkItalic = inlineStyles.includes("ITALIC");
    const checkUnderline = inlineStyles.includes("UNDERLINE");
    controlStyles(isBold, checkBold, setIsBold);
    controlStyles(isItalic, checkItalic, setIsItalic);
    controlStyles(isUnderline, checkUnderline, setIsUnderline);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorState]);

  const handleChange = useCallback(editorState => {
    const contentState = editorState.getCurrentContent();
    const text = contentState.getPlainText();
    const lastKey = text[text.length - 1];
    if (lastKey !== "\n") {
      setEditorState(editorState);
    }
  }, []);

  const handleKeyCommand = useCallback((command, editorState): any => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not handled";
  }, []);

  const handleReturn = useCallback(
    (e, editorState): any => {
      e.preventDefault();
      const contentState = ContentState.createFromText("");
      const newState = EditorState.push(
        editorState,
        contentState,
        "remove-range"
      );
      setEditorState(newState);
    },
    [setEditorState]
  );

  const stylingClick = useCallback(
    (e: any, style: string) => {
      e.preventDefault();
      editorRef.current.focus();
      const newState = RichUtils.toggleInlineStyle(editorState, style);
      setEditorState(newState);
    },
    [editorState, setEditorState]
  );

  return (
    <EditorContainer>
      <Display />
      <Editor
        editorState={editorState}
        onChange={handleChange}
        handleKeyCommand={handleKeyCommand}
        handleReturn={handleReturn}
        ref={editorRef}
      />
      <EditorOptions>
        <EditorOption
          onMouseDown={e => stylingClick(e, "BOLD")}
          isSelected={isBold}
          onTouchEnd={e => stylingClick(e, "BOLD")}
        >
          B
        </EditorOption>
        <EditorOption
          onMouseDown={e => stylingClick(e, "ITALIC")}
          isSelected={isItalic}
          onTouchEnd={e => stylingClick(e, "ITALIC")}
        >
          I
        </EditorOption>
        <EditorOption
          onMouseDown={e => stylingClick(e, "UNDERLINE")}
          isSelected={isUnderline}
          onTouchEnd={e => stylingClick(e, "UNDERLINE")}
        >
          U
        </EditorOption>
      </EditorOptions>
    </EditorContainer>
  );
};

export default DraftJS;
