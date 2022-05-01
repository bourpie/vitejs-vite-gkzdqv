import { createStore, combineReducers } from 'redux';
import CounterReducer from './CounterReducer';
import CartReducer from './CartReducer';

const rootReducer = combineReducers({
  CounterReducer,
  CartReducer,
});

const store = createStore(rootReducer);

export default store;
