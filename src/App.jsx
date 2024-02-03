import React from 'react'
import './App.css'
import Header from './components/Header'
import TodosLogic from './components/TodosLogic'

function App() {

  return (
    <React.Fragment>
      <div className="wrapper">
      <div className="todos">
    <Header />
    <TodosLogic />
    </div>
    </div>
    </React.Fragment>
  )
}

export default App
