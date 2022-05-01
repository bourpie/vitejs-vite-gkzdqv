import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function MyCart() {
  const [cartData, setCartData] = useState(0);
  const { cart } = useSelector((state) => ({
    ...state.cartReducer,
  }));
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch({
      type: 'ADDCART',
      payload: cartData,
    });
  };

  return (
    <div>
      <h1>MyCart {cart}</h1>
      <input
        value={cartData}
        onInput={(e) => setCartData(e.target.value)}
        type="number"
      />
      <button onClick={addToCart}>Ajouter au panier</button>
    </div>
  );
}

export default MyCart;
