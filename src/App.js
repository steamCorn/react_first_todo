import React, { Component } from 'react';

import TodoList from './TodoList';
import './style/app.css';

class App extends Component{
  

  render(){
    return(
      <div className= "app-style">
        <TodoList/>
      </div>
    )
  }
}

export default App
