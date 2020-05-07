import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from "redux-thunk";

import reducers from "./store/reducers";
import applyInterceptors from "./interceptor"

//network settings.
applyInterceptors();

// store settings
const combReducers = combineReducers(reducers)
const middlewares = applyMiddleware(thunk);
const store = createStore(combReducers, middlewares);


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
    		<App />
    	</BrowserRouter>
    </Provider>
  	, document.getElementById('root')
);


// serviceWorker.register();
