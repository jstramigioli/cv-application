import { useState } from 'react'
import '../styles/App.css'
import Header from './Header'
import EditingArea from './Editing-area'
import PreviewArea from './Preview-area'

function App() {
  const [bioInfo, setBioInfo] = useState([{
    id:crypto.randomUUID(),
    /* 'bio-fn':'',
    'bio-ln':'',
    'bio-mail':'',
    'bio-tel':'',
    'bio-date':'' */
    'bio-fn':'Julian',
    'bio-ln':'Stramigioli',
    'bio-mail':'julian@gmail.com',
    'bio-tel':'123456789',
    'bio-date':'1994-6-1'
  }])
  const [eduInfo, setEduInfo] = useState([{
    id:crypto.randomUUID(),
    /* 'edu-school':'',
    'edu-title':'',
    'edu-date':'' */
    'edu-school':'San Patricio',
    'edu-title':'Escuela Primaria',
    'edu-date':'1994-6-1'
  },
  {
    id:crypto.randomUUID(),
    'edu-school':'Bottger',
    'edu-title':'Escuela secundaria',
    'edu-date':'1994-6-1'
  }
])
  const [jobInfo, setJobInfo] = useState([{
    id:crypto.randomUUID(),
    /* 'exp-name':'',
    'exp-title':'',
    'exp-resp':'',
    'exp-from':'',
    'exp-to':'', */
    'exp-name':'Docente Faud',
    'exp-title':'Ayudante auxiliar',
    'exp-resp':'Colaborar en las tareas docentes',
    'exp-from':'1994-6-1',
    'exp-to':'1994-6-1',
  },
{
  id:crypto.randomUUID(),
  'exp-name':'Docente Faud',
    'exp-title':'Ayudante auxiliar',
    'exp-resp':'Colaborar en las tareas docentes',
    'exp-from':'1994-6-1',
    'exp-to':'1994-6-1',
  
}
])

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
      
      <main>
        <EditingArea cvData={cvData}/>
        <PreviewArea cvData={cvData}/>
      </main>
    </>
  )
}

export default App
