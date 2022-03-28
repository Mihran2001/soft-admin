import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Editor, EditorState, RichUtils } from "draft-js";
// import addLinkPlugin from "./plugins/addLinkPlugin";
import "draft-js/dist/Draft.css";

function TextEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  //   const plugins = [addLinkPlugin];

  const onChange = (editorState: any) => {
    setEditorState(editorState);
  };

  //   const onAddLink = () => {
  //     const selection = editorState.getSelection();
  //     const link = window.prompt("Paste the link -");
  //     if (!link) {
  //       onChange(RichUtils.toggleLink(editorState, selection, null));
  //       return "handled";
  //     }
  //     const content = editorState.getCurrentContent();
  //     const contentWithEntity = content.createEntity("LINK", "MUTABLE", {
  //       url: link,
  //     });
  //     const newEditorState = EditorState.push(
  //       editorState,
  //       contentWithEntity,
  //       "apply-entity"
  //     );
  //     const entityKey = contentWithEntity.getLastCreatedEntityKey();
  //     onChange(RichUtils.toggleLink(newEditorState, selection, entityKey));
  //     return "handled";
  //   };

  const handleKeyCommand = (command: any) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  const onUnderlineClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
  };

  const onBoldClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  const onItalicClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };

  const onStrikeThroughClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, "STRIKETHROUGH"));
  };

  return (
    <div className="editorContainer">
      <button
        className="inline styleButton editorButtons"
        id="underline"
        onClick={onUnderlineClick}
      >
        U
      </button>

      <button
        className="inline styleButton editor-buttons"
        id="bold"
        onClick={onBoldClick}
      >
        B
      </button>

      <button
        className="inline styleButton editor-buttons"
        id="italic"
        onClick={onItalicClick}
      >
        I
      </button>
      <button
        className="inline styleButton strikethrough editor-buttons"
        onClick={onStrikeThroughClick}
      >
        abc
      </button>

      {/* <button id="link_url" onClick={onAddLink} className="add-link">
        <i className="material-icons">attach_file</i>
      </button> */}
      {/* <label>Content</label> */}
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        placeholder="Content"
        // plugins={plugins}
      />
    </div>
  );
}

export default TextEditor;
