import React from 'react';
import TodoB from './component/TodoB'
import Todolist from './component/Todolist'
import FormHookR from './component/FormHookR'
import FormHook from './component/FormHook'
import './App.css';

function App() {
  return (
    <div className="App">
      <FormHookR></FormHookR>
      <FormHook></FormHook>
      {/* <Todolist></Todolist> */}
      <TodoB></TodoB>
    </div>
  );
}

export default App;
