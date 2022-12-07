import {createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { tabReducer } from './reducers/tabReducer';
import { todoReducers } from './reducers/todosReducer';

const reducer = combineReducers({
    todos : todoReducers,
    currentTab:tabReducer
})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;