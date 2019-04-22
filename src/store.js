import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';

import combinedReducer from './reducer';
import rootSaga from './reducer/saga';

export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const navMiddleware = routerMiddleware(history);

const store = createStore(
    combinedReducer,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            sagaMiddleware,
            navMiddleware
        )
    )
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
