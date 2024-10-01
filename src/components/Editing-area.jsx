import '../styles/editing-area.css'
import InputSection from './Input-section'


export default function EditingArea({cvData}) {
    return (
        <>
        {cvData.map(data => 
            <section key={data.title} className="editing-area">
                <InputSection title={data.title} 
                inputList={data.inputList}
                savedInfo={data.info}
                setInfo={data.setInfo}
                canAdd={data.canAdd}
                />
            </section>
        )}
        </>
    )
}