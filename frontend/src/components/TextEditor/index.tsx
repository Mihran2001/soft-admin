import React, { useState, FC } from "react";
import ReactDOM from "react-dom";
import {
  Editor,
  EditorState,
  RichUtils,
  ContentState,
  convertToRaw,
} from "draft-js";
import "draft-js/dist/Draft.css";
import { convertToHTML, convertFromHTML } from "draft-convert";

interface ITextEditor {
  editorContent: string;
  setEditorContent: string;
}

const TextEditor: FC<any> = ({ editorContent, setEditorContent }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onChange = (editorState: any) => {
    setEditorState(editorState);
  };

  const handleKeyCommand = (command: any) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  const onUnderlineClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    onChange(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
  };

  const onBoldClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    onChange(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  const onItalicClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    onChange(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };

  const onStrikeThroughClick: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    e.preventDefault();
    onChange(RichUtils.toggleInlineStyle(editorState, "STRIKETHROUGH"));
  };

  // console.log(convertToHTML(editorState.getCurrentContent()));
  setEditorContent(convertToHTML(editorState.getCurrentContent()));

  return (
    <div className="editorContainer">
      <button
        className="inline styleButton editorButtons"
        id="underline"
        onMouseDown={onUnderlineClick}
      >
        U
      </button>

      <button
        className="inline styleButton editor-buttons"
        id="bold"
        onMouseDown={onBoldClick}
      >
        B
      </button>

      <button
        className="inline styleButton editor-buttons"
        id="italic"
        onMouseDown={onItalicClick}
      >
        I
      </button>
      <button
        className="inline styleButton strikethrough editor-buttons"
        onMouseDown={onStrikeThroughClick}
      >
        abc
      </button>
      <label htmlFor="" style={{ display: "block", marginTop: "20px" }}>
        Content
      </label>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        placeholder="Content"
      />
    </div>
  );
};

export default TextEditor;
