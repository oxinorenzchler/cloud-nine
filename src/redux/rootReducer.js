import {combineReducers} from 'redux'
import authReducer from './auth/authReducer'
import projectReducer from './project/projectReducer'
import {firebaseReducer} from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer

})

export default rootReducer