import '../styles/editing-area.css'
import InputSection from './Input-section'

const bioInputsList = [
    {title: 'First name', type:'text', id:'bio-fn'},
    {title: 'Last name', type:'text', id:'bio-ln'},
    {title: 'Email', type:'email', id:'bio-mail'},
    {title: 'Phone number', type:'tel', id:'bio-tel'},
    {title: 'Date of birth', type:'date', id:'bio-date'},
]

const eduInputsList = [
    {title: 'School name', type:'text', id:'edu-school'},
    {title: 'Title of study', type:'text', id:'edu-title'},
    {title: 'Date of study', type:'date', id:'edu-date'},
]

const practInputList = [
    {title: 'Company name', type:'text', id:'exp-name'},
    {title: 'Position title', type:'text', id:'exp-title'},
    {title: 'Main responsabilities', type:'text', id:'exp-resp'},
    {title: 'From', type:'date', id:'exp-from'},
    {title: 'To', type:'date', id:'exp-to'},
]

export default function EditingArea({eduInfo, addSchool}) {
    return (
        <>
            <section className="editing-area">
                <InputSection title='Bio' 
                inputList={bioInputsList}
                savedInfo={eduInfo}
                addHandler={addSchool}
                />
            </section>
            <section className="editing-area">
                <InputSection title='Educational Experience' 
                inputList={eduInputsList} 
                canAdd={true}
                savedInfo={eduInfo}
                addHandler={addSchool}
                />
            </section>
            <section className="editing-area">
                <InputSection title='Practical Experience' 
                inputList={practInputList} 
                canAdd={true}
                savedInfo={eduInfo}
                addHandler={addSchool}
                />
            </section>
        </>
    )
}