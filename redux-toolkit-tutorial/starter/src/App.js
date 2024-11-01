import Navbar from "./Component/Navbar";
import CartContainer from "./Component/cartContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Modal from "./Component/Modal";
import { calculateTotals, fetchCartItems } from "./features/cart/cartSlice";
function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(fetchCartItems('random'));
  }, []);

  if (isLoading) {
    return (
    <div className="loading">
      <h1>loading...</h1>
    </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
