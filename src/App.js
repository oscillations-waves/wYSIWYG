import React, { useRef } from "react";
import "./styles.css";
import {
  Editor,
  createEditorState,
} from 'medium-draft';

export default function App() {

  const refsEditor = useRef();
  const [editorState, setEditorState] = React.useState(createEditorState())
  
  React.useEffect(() => {
    refsEditor.current.focus()
  })

  return (
    <div className="App">
      <Editor
        ref={refsEditor}
        editorState={editorState}
        onChange={editorState => setEditorState(editorState)} />
    </div>
  );
}
