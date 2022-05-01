import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from './counterReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  counterReducer,
  cartReducer,
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

const store = createStore(rootReducer, applyMiddleware(customMiddleware));

export default store;
