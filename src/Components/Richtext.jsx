import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = () => {
  const [content, setContent] = useState('');

  return (
    <div>
      <ReactQuill theme="snow" value={content} onChange={setContent} />
      <button onClick={() => alert(content)}>Save</button>
    </div>
  );
};

export default RichTextEditor;
