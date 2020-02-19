import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import { getFirebase } from 'react-redux-firebase'

const middlewares = [
    logger,
    thunk.withExtraArgument(getFirebase)
]

const store = createStore(rootReducer,
        //compose is a method for adding more store enhancer
        compose(
            //withExtraArgument is a method which accept an object. It is use to add more functionalities to redux thunk
            applyMiddleware(...middlewares),
            //arguments in thunk will look to this enhancers
            //pass in the config file to connect app with firebase

        )
    )


export default store