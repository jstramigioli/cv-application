import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import EditingArea from './components/Editing-area'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <EditingArea/>
    </>
  )
}

export default App
