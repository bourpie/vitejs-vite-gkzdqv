import { createStore } from 'redux';
import CounterReducer from '../Reducers/CounterReducer';
import AddCartReducer from '../Reducers/AddCartReducer';

const store = createStore(AddCartReducer);

export default store;
