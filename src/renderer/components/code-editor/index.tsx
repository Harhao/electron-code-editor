import React from 'react'
import {UnControlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

export default function() {
  // ...
  return (
    <CodeMirror
      value={''}
      options={{
        mode: 'javascript',
        theme: 'material',
        lineNumbers: true
      }}
    />      
  );
}
