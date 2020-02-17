import React from 'react'

function ProjectSummary({project}) {
    return (
        <React.Fragment>
                <div className="card z-depth-1 project-summary">
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title">{project.title}</span>
                        <p>Posted by Cymburyo</p>
                        <p className="grey-text">10<sup>th</sup> of February, 10PM</p>
                    </div>
                </div>            
        </React.Fragment>
    )
}

export default ProjectSummary
