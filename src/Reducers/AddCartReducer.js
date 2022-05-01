const INITIAL_STATE = {
  cart: 999,
};

function AddCartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADDCART': {
      return {
        ...state,
        // cart: state.count + 1,
      };
    }
  }

  return state;
}

export default AddCartReducer;
