import React from 'react'
import CodeEditor from '@src/renderer/components/code-editor';
import NavHeader from '@src/renderer/components/nav-header';

import './App.scss'

function App() {

  return (
    <div className="App">
      <NavHeader></NavHeader>
      <CodeEditor></CodeEditor>
    </div>
  )
}

export default App
