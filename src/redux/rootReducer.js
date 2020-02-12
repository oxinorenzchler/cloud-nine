import {combineReducers} from 'redux'
import authReducer from './auth/authReducer'
import projectReducer from './project/projectReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})

export default rootReducer