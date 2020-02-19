import React from 'react'
import {connect} from 'react-redux'
import { useHandleChange } from '../../globalHooks/globalHooks'
import {createProject} from '../../redux'

function CreateProject() {

    const [input, handleInputChange] = useHandleChange({
        title: '',
        content: ''
    });
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
    }

    const {title, content} = input
    
    return (
        <React.Fragment>
            <div className="container">
                <form onSubmit={handleSubmit} className="white z-depth-1">
                    <h5 className="grey-text text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input  type="text" id="title" onChange={handleInputChange} value={title} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={handleInputChange} value={content}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        createProject: () => dispatch(createProject())
    }
}

export default connect(
    null,
    mapDispatchToProps
)(CreateProject)
