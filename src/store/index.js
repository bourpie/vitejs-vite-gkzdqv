import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from './counterReducer';
import cartReducer from './cartReducer';
import imageReducer from './imageReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  counterReducer,
  cartReducer,
  imageReducer,
});

// Curryfication
// 0:50 https://www.udemy.com/course/react-formation-complete/learn/lecture/25742150#overview
const customMiddleware = (store) => (next) => (action) => {
  const actionModif = {
    type: 'ADDCART',
    payload: 234,
  };

  next(actionModif);
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
