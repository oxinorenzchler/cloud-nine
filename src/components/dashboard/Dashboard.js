import React from 'react'
import {connect} from 'react-redux'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'

function Dashboard(props) {

    const {projects} = props

    return (
        <React.Fragment>
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-1">
                        <Notifications/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(
    mapStateToProps
)(Dashboard)
