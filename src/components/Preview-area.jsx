import { useState } from 'react'
import '../styles/Preview-area.css'
import { format } from 'date-fns'

export default function PreviewArea({cvData}) {
    const bioInfo = cvData[0].info[0]
    const eduInfo = cvData[1].info
    const jobInfo = cvData[2].info

    const [zoomLevel, setZoomLevel] = useState(65)

    return (
        <section className="preview-area">
            <div className="button-container">
                <button className='zoom-control' onClick={()=> {setZoomLevel(zoomLevel-15)}}>-</button>
                <button className='zoom-control' onClick={()=> {setZoomLevel(zoomLevel+15)}}>+</button>
            </div>
            <div className="a4-sheet" style={{ transform: `scale(${zoomLevel}%)` }}>
                <div className="name">
                    <h1>{bioInfo['bio-fn'] + ' ' + bioInfo['bio-ln']}</h1>
                </div>
                    <div className="bio">
                        
                        <div className='bio-container'>
                            <p>{bioInfo['bio-mail']}</p>
                            <p>Phone number: {bioInfo['bio-tel']}</p>
                            <p>Date of Birth: {format(new Date(bioInfo['bio-date']), 'MMMM dd, yyyy')}</p>
                        </div>
                    </div>
                    <div className="edu">
                        <h1>Educational experience</h1>
                        <ul>
                            {eduInfo.map((study) => {
                                return (
                                <li key={study.id} className="study">
                                    <h3>{study['edu-school']}</h3>
                                    <p>{study['edu-title']}</p>
                                    <p>{study['edu-date'] ? (<em>Finished:  {new Date(study['edu-date']).getFullYear()}</em>)  : null}</p>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="jobs">
                        <h1>Practical experience</h1>
                        <ul>
                            {jobInfo.map((job) => {
                                return (
                                <li key={job.id} className="study">
                                    <h3>{job['exp-name']}</h3>
                                    <p>{job['exp-title']}</p>
                                    <p>{job['exp-resp'] ? 'Responsabilities ' + job['exp-resp']: null}</p>
                                    <em>{job['exp-from'] ? 'From: ' + format(new Date(job['exp-from']), 'MMMM yyyy') : null}</em>
                                    <em>{job['exp-to'] ? '    To:   ' + format(new Date(job['exp-to']), 'MMMM yyyy') : null}</em>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
            </div>
            
        </section>
    )
}