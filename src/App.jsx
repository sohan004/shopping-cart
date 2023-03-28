import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { getData } from './components/Utiliti'


function App() {


  return (
    <div className="App">
      <Header ></Header>
      <Main ></Main>

    </div>
  )
}

export default App
