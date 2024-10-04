import { useState } from 'react'
import '../styles/editing-area.css'
import InputSection from './Input-section'


export default function EditingArea({cvData}) {
    const [isHidden, setIsHidden] = useState(false)
    function toggleEditingAreaVisibility() {
        setIsHidden(!isHidden)
    }

    const [expanded, setExpanded] = useState(true)
    return (
        <>
            <div className={`editing-area ${isHidden ? 'hidden' : ''}`}>
                {cvData.map(data => 
                    
                        <InputSection key={data.title} title={data.title} 
                        inputList={data.inputList}
                        savedInfo={data.info}
                        setInfo={data.setInfo}
                        canAdd={data.canAdd}
                        />
                    
                )}
            </div>
            <button className={'toggle-expand' + ' ' + (expanded ? 'expanded' : '') } onClick={()=>{
                setExpanded(!expanded)
                toggleEditingAreaVisibility()
            }}> &gt;</button>
        </>
    )
}