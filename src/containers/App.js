import React, { Component } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';
import Styles from '../stylesheets/style.css';



import MainApp from './MainApp';
const reducer = combineReducers(reducers);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);
export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <MainApp />
                </Provider>
            </div>
        );
    }
}