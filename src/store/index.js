import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import catAndProReducer from './reducer';

const rootReducer = combineReducers({catAndProReducer});

const store = () =>{
  return createStore(rootReducer, composeWithDevTools());
};

export default store();