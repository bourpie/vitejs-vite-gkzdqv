import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CounterReducer from '../Reducers/CounterReducer';
import AddCartReducer from '../Reducers/AddCartReducer';

const Store = createStore(AddCartReducer);

export default store;
