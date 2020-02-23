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
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //connect to firestore
        console.log("inside the reutnr")
        const firestore = getFirestore()
        firestore.collection('projects').add({
            authorFirstName: 'Ice Ice',
            authorLastName: 'Baby',
            authorId: 53696,
            createdAt: new Date()
        }).then(() => {
            //dispatch here
            dispatch({CREATE_PROJECT_REQUEST, project})
        }).catch(err => {
            // dispatch({type:'CREATE_PROJECT_ERROR', err})
        })
    }
}