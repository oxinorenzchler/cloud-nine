import React from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'

function Dashboard() {
    return (
        <React.Fragment>
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList/>
                    </div>
                    <div className="col s12 m5 offset-1">
                        <Notifications/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dashboard
