const INITIAL_STATE = {
  imgUrl: '',
};

function imageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOADIMG': {
      return {
        ...state,
        imgUrl: action.payload,
      };
    }
  }

  return state;
}

export default imageReducer;

export const getCatImg = () => (dispatch) => {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: 'LOADIMG',
        payload: data[0].url,
      });
    });
};
