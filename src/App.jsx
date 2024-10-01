import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import EditingArea from './components/Editing-area'
import PreviewArea from './components/Preview-area'

function App() {
  const [bioInfo, setBioInfo] = useState([{}])
  const [eduInfo, setEduInfo] = useState([{}])
  const [jobInfo, setJobInfo] = useState([{}])

  const bioData = {
    title: 'Bio',
    info:bioInfo,
    setInfo:setBioInfo,
    inputList:
      [
          {title: 'First name', type:'text', id:'bio-fn'},
          {title: 'Last name', type:'text', id:'bio-ln'},
          {title: 'Email', type:'email', id:'bio-mail'},
          {title: 'Phone number', type:'tel', id:'bio-tel'},
          {title: 'Date of birth', type:'date', id:'bio-date'},
      ]
    }

  const eduData = {
    title: 'Educational Experience',
    info:eduInfo,
    setInfo:setEduInfo,
    inputList: 
      [
          {title: 'School name', type:'text', id:'edu-school'},
          {title: 'Title of study', type:'text', id:'edu-title'},
          {title: 'Date of study', type:'date', id:'edu-date'},
      ],
    canAdd:true
    }

  const jobData = {
    title: 'Practical Experience',
    info:jobInfo,
    setInfo:setJobInfo,
    inputList:
      [
          {title: 'Company name', type:'text', id:'exp-name'},
          {title: 'Position title', type:'text', id:'exp-title'},
          {title: 'Main responsabilities', type:'text', id:'exp-resp'},
          {title: 'From', type:'date', id:'exp-from'},
          {title: 'To', type:'date', id:'exp-to'},
      ],
    canAdd:true
    }
  const cvData = [
    bioData,
    eduData,
    jobData
  ]

 
  return (
    <>
      <Header/>
      <main>
        <EditingArea cvData={cvData}/>
        <PreviewArea/>
      </main>
    </>
  )
}

export default App
