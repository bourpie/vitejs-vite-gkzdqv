import { useSelector, useDispatch } from 'react-redux';

function MyCounter() {
  const { count } = useSelector((state) => ({
    ...state.counterReducer,
  }));
  const dispatch = useDispatch();
  const incrFunc = () => {
    dispatch({
      type: 'INCR',
    });
  };
  const decrFunc = () => {
    dispatch({
      type: 'DECR',
    });
  };

  return (
    <div>
      <h1>MyCounter {count}</h1>
      <button onClick={decrFunc}>-1</button>
      <button onClick={incrFunc}>+1</button>
    </div>
  );
}

export default MyCounter;
