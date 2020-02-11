import React from 'react'

function ProjectDetails(props) {
    console.log(props.match.params.id)
    const id = props.match.params.id

    return (
        <React.Fragment>
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Project Title - {id} </span>
                        <p>Lorem ipusum</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by Igor</div>
                        <div>10<sup>th</sup> of February, 10PM</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProjectDetails
