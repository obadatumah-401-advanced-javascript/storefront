import {createStore, combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import catAndProReducer from './reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({catAndProReducer});

const store = () =>{
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();