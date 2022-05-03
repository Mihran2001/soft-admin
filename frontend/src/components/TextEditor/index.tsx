import React, { useState } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  ContentState,
  convertFromHTML,
} from "draft-js";
import "draft-js/dist/Draft.css";
import { convertToHTML } from "draft-convert";
import { Root, SButton } from "./styled";
import InlineStyleControls from "./InitialStylesControl";

export const deserializeEditorValue = (html: string) => {
  const blocksFromHTML = convertFromHTML(html);
  const state = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );

  return EditorState.createWithContent(state);
};
export const getInitialState = () => EditorState.createEmpty();
export const serializeEditorValue = (editorState: EditorState) =>
  convertToHTML(editorState.getCurrentContent());

export const convertHTMLToString = (htmlString: string) =>
  htmlString.replace(/<[^>]+>/g, "");

interface IProps {
  value?: EditorState;
  onChange?: (editorState: EditorState) => void;
}

const TextEditor: React.FC<IProps> = ({
  value = getInitialState(),
  onChange = () => {},
}) => {
  const handleKeyCommand = (command: any) => {
    const newState = RichUtils.handleKeyCommand(value, command);
    if (newState) {
      onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  const toggleInlineStyle: any = (inlineStyle: any) => {
    const newState = RichUtils.toggleInlineStyle(value, inlineStyle);
    onChange(newState);
  };

  return (
    <Root>
      <InlineStyleControls
        currentInlineStyle={value.getCurrentInlineStyle()}
        onToggle={toggleInlineStyle}
      />

      <Editor
        editorState={value}
        onChange={onChange}
        handleKeyCommand={handleKeyCommand}
        placeholder="Content"
      />
    </Root>
  );
};

export default TextEditor;
