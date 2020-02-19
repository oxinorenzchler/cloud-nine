import {
    CREATE_PROJECT_REQUEST
} from './projectTypes'

export const createProjectRequest = () => {
    return {
        type: CREATE_PROJECT_REQUEST,

    }
}

export const createProject = project => {
    //receive props applied in thunk
    return (dispatch, {getFirebase, getFirestore}) => {
        
    }
}