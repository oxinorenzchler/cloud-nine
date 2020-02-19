import React from 'react';
import {Provider} from 'react-redux';
import firebase, {rrfConfig} from './config/fbConfig'
import store from './redux/store'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFireStoreInstance } from 'redux-firestore'

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFireStoreInstance
}

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
              <div className="App">
                <Navbar/>
                <Switch>
                  <Route exact path='/' component={Dashboard} />
                  <Route path='/signin' component={SignIn} />
                  <Route path='/signup' component={SignUp} />
                  <Route path='/project/:id' component={ProjectDetails} />
                  <Route path='/create' component={CreateProject} />
                </Switch>
              </div>
          </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
