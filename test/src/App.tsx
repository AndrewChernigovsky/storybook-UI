import React from 'react';
import './App.css';
import { MyButton, MyInput } from 'ui-kit-andrey-new-new';

function App() {
  return (
    <div className="App">
      <MyButton color={'green'}>Button</MyButton>
      <MyInput placeholder='enter your text' label='say hi' color='red' />
    </div>
  );
}

export default App;
