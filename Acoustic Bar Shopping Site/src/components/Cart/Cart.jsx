import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "../Cart/CartItem/CartItem";

const Cart = ({ setShowCart }) => {
  return (
    <div className="cart-panel">
      <div className="opaque-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>

        {/* <div className="empty-cart">
          <BsCartX />
          <span>No Products in the cart</span>
          <button className="return-btn">RETURN TO SHOP</button>
        </div> */}
        <>
          <CartItem />
          <div className="cart-footer">
            <span className="text">Subtotal: </span>
            <sapn className="text-total">&#8377;1234</sapn>
          </div>
          <div className="button">
            <button className="checkout-cta">Checkout</button>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
