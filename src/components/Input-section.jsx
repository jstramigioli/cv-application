import'../styles/Input-section.css'



export default function InputSection({title, inputList, savedInfo, setInfo, canAdd,}) {
    function addHandler() {setInfo([...savedInfo, {id:crypto.randomUUID(),}])}

    function removeHandler(id) {setInfo(savedInfo.filter((info) => 
        info.id != id
    ))}

    function updateInfo(infoId, key, value) {
        setInfo(savedInfo.map((info) => {
            if (info.id === infoId) {
                return {...info, [key]:value}
            }
            else return info
        }))
    }

    return (
        <div className="input-section">
            <h1>{title}</h1>
            {savedInfo.map((info) => (
                <div className='inputGroup' key={info.id}>
                    
                    
                    {canAdd ? <button className='remove' onClick={() => removeHandler(info.id)}>X</button> : null }
                        <div style={{flexGrow: 1}}>
                            {inputList.map(input => (
                                <div key={input.id} className='input-field'>
                                    <h2>{input.title}</h2>
                                    <input type={input.type}
                                    value={info[input.id] || ''}
                                    onChange={(e) => updateInfo(info.id, input.id, e.target.value)}
                                     />
                                </div>
                            
                            ))}
                        </div>
                    
                </div>
            ))}
            {canAdd ? <button className='add-group' onClick={addHandler} >+</button> : null}
        </div>
    )
}