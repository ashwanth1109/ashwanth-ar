// @flow

import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  ContentState,
  convertToRaw
  // Modifier
} from "draft-js";

import { EditorContainer, EditorOptions, EditorOption } from "./styles";
import Display from "./Display";

const DraftJS = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const editorRef: { current: any } = useRef();
  const [display, setDisplay] = useState(null);
  // const [prevContent, setPrevContent] = useState(null);

  const controlStyles = useCallback((repVal, trueVal, setFn) => {
    if (repVal && !trueVal) setFn(false);
    if (!repVal && trueVal) setFn(true);
  }, []);

  // remove later
  useEffect(() => {
    setDisplay(null);
  }, []);

  useEffect(() => {
    let contentState = ContentState.createFromText("");
    contentState = contentState.createEntity("LINK", "MUTABLE", {
      url: "https://www.google.com/"
    });
    console.log(convertToRaw(contentState));
    // const selectionState = editorState.getSelection();
    // const contentStateWithEntity = contentState.createEntity(
    //   "LINK",
    //   "MUTABLE",
    //   { url: "https://www.google.com/" }
    // );
    // const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    // const contentStateWithLink = Modifier.applyEntity(
    //   contentStateWithEntity,
    //   selectionState,
    //   entityKey
    // );
    // // const newEditorState = EditorState.push(editorState, contentStateWithLink);
    // console.log(convertToRaw(contentStateWithLink));
    // setEditorState(newEditorState);
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
    console.log("handle change triggered");
    // const contentState = editorState.getCurrentContent();
    // // console.log(convertToRaw(contentState));
    // const selectionState = editorState.getSelection();
    // const text = contentState.getPlainText();
    // const lastKey = text[text.length - 1];
    // if (lastKey !== "\n") setEditorState(editorState);
    // else setDisplay(convertToRaw(contentState));
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
      console.log(convertToRaw(contentState));
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
      <Display display={display} />
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
