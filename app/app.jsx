import {Provider} from 'react-redux';
import DataRead from './components/DataRead'

if (module.hot) {
    module.hot.accept()
}

import ReactDOM from 'react-dom';
import React from 'react';
import './css/test.css';
import Cart from './components/cart';
import { createStore } from 'redux';
import Nothing from './components/nothing';

import reducer from './components/reducers'

import WrappedComponent from './components/testPoll.js'
import Hello from './components/hello.jsx';

const store = createStore(reducer)

const App = () => (
    <Provider store={store}>
        <div>
            <Hello/>
        </div>Ï
    </Provider>
);

ReactDOM.render(
    <App/>
    , document.getElementById('root'));
