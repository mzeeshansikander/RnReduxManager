import React, {Component} from 'react';
import {View} from 'react-native';
import {Header, Button,Spinner,CardSection} from './components/common';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers'
import firebase from '@firebase/app'
import '@firebase/auth'
import ReduxThunk from 'redux-thunk'
import LoginForm from './components/LoginForm';
import Router from './Router';



class App extends Component{
    componentWillMount(){

        firebase.initializeApp({
            apiKey: "AIzaSyABEYZNUd2pPOBvxjHWMZ8hwudnfY8LNqA",
            authDomain: "reactnativemanager-75a62.firebaseapp.com",
            databaseURL: "https://reactnativemanager-75a62.firebaseio.com",
            projectId: "reactnativemanager-75a62",
            storageBucket: "reactnativemanager-75a62.appspot.com",
            messagingSenderId: "715459247689"
          });
    }

    render(){
        const store = createStore(reducers,{},applyMiddleware(ReduxThunk))
    return(
        
            <Provider store ={store}>
                <Router />
            </Provider>
      
    );
}

};

export default App;