import'../styles/Input-section.css'



export default function InputSection({title, inputList, savedInfo, setInfo, canAdd,}) {
    function addHandler() {setInfo([...savedInfo, {}])}
    return (
        <div className="input-section">
            <h1>{title}</h1>
            {savedInfo.map((info, index) => (
                <div key={index}>
                    {inputList.map(input => (
                        <div key={input.id}>
                            <h2>{input.title}</h2>
                            <input type={input.type} />
                        </div>
                        
                    ))}
                </div>
            ))}
            {canAdd ? <button onClick={addHandler}>Add</button> : null}
        </div>
    )
}