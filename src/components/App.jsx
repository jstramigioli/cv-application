import { useState } from 'react'
import '../styles/App.css'
import EditingArea from './Editing-area'
import PreviewArea from './Preview-area'

function App() {
  const [bioInfo, setBioInfo] = useState([{
    id:crypto.randomUUID(),
    'bio-fn':'Homer',
    'bio-ln':'Simpson',
    'bio-mail':'homer@gmail.com',
    'bio-tel':'123456789',
    'bio-date':'1994-3-3'
  }])
  const [eduInfo, setEduInfo] = useState([{
    id:crypto.randomUUID(),
    'edu-school':'A school',
    'edu-title':'Elementary',
    'edu-date':'1997-6-1'
  },
  {
    id:crypto.randomUUID(),
    'edu-school':'Another School',
    'edu-title':'High School',
    'edu-date':'2003-6-1'
  }
])
  const [jobInfo, setJobInfo] = useState([{
    id:crypto.randomUUID(),
    'exp-name':'My first work',
    'exp-title':'Worker',
    'exp-resp':'Working hard',
    'exp-from':'2011-6-1',
    'exp-to':'2015-6-1',
  },
{
  id:crypto.randomUUID(),
  'exp-name':'My next work',
    'exp-title':'Also a worker',
    'exp-resp':'Working even harder',
    'exp-from':'2015-6-1',
    'exp-to':'2018-6-1',
  
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
