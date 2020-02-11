import React from 'react'
import ProjectSummary from './ProjectSummary'

function ProjectList() {
    return (
        <React.Fragment>
            <div className="project-list section">
                <ProjectSummary />
                <ProjectSummary />
                <ProjectSummary />
            </div>
        </React.Fragment>
    )
}

export default ProjectList
