import React, { useState } from "react";
import { Editor, EditorState } from "draft-js";

const MyInput = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  console.log("editorStateeeee", editorState);

  return <Editor editorState={editorState} onChange={setEditorState} />;
};

export default MyInput;
