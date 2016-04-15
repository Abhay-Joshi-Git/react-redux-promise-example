import * as Redux from "redux";
import promiseMiddleware from 'redux-promise';
import ToDos  from './reducers';

export default Redux.createStore(ToDos, Redux.applyMiddleware(promiseMiddleware) );

