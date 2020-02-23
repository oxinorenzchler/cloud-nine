import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import {reduxFirestore,getFirestore} from 'redux-firestore'
import firebase from '../config/fbConfig'


const middlewares = [
    logger,
    thunk.withExtraArgument({
        getFirestore
    })
]

const store = createStore(rootReducer,
        //compose is a method for adding more store enhancer
        compose(
            applyMiddleware(...middlewares),
            //initialize firebase config with firestor
            reduxFirestore(firebase)
            

        )
    )


export default store