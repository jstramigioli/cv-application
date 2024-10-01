import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import EditingArea from './components/Editing-area'
import PreviewArea from './components/Preview-area'

function App() {
  const [eduInfo, setEduInfo] = useState([{}])

  function addSchool() {
    setEduInfo([...eduInfo, {}])
  }

  return (
    <>
      <Header/>
      <main>
        <EditingArea eduInfo={eduInfo} addSchool={addSchool}/>
        <PreviewArea/>
      </main>
    </>
  )
}

export default App
