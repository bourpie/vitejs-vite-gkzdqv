import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from './counterReducer';
import cartReducer from './cartReducer';
import imageReducer from './imageReducer';
import articleReducer from './articleReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  counterReducer,
  cartReducer,
  imageReducer,
  articleReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
