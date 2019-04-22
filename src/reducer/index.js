import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import employees from './employees';

const config = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({ 
    routing: routerReducer,
    employees
});

const appReducer = persistReducer(config, rootReducer);

export default appReducer;