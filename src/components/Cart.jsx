import CartIcon from "/icon-cart.svg";
import Thumbnail from "/image-product-1-thumbnail.jpg";
import Trash from "/icon-delete.svg";
import { useCart } from "../contexts/CartContext";

function Cart() {
  const { dispatch, quantity, cartOpen, cart } = useCart();
  const totalPrice = quantity * 125;
  return (
    <>
      <button
        className="relative"
        onClick={() => dispatch({ type: "toggleCart" })}
      >
        <img src={CartIcon} alt="cart" className="h-6 w-6" />
        {quantity < 1 || !cart || (
          <p className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-Orange px-2 text-xs text-white">
            {quantity}
          </p>
        )}
      </button>
      {cartOpen && (
        <div className="absolute right-0 top-24 z-50 w-screen rounded-lg bg-BgWhite px-4 py-10 shadow-2xl sm:right-14 sm:top-16 sm:w-96">
          <h1 className="mb-5 border-b text-xl font-bold">Cart</h1>

          {cart ? (
            <>
              <div className="mb-5 flex items-center justify-between">
                <img src={Thumbnail} alt="" className="w-14 rounded-md" />
                <div>
                  <p className="font-bold text-GrayishBlue">
                    Fall Limited Edition Sneakers
                  </p>
                  <p className="font-medium text-GrayishBlue">
                    $125.00 x {quantity}
                    <span className="ml-1 font-bold text-VeryDarkBlue">
                      ${totalPrice}.00
                    </span>
                  </p>
                </div>
                <button onClick={() => dispatch({ type: "deleteItems" })}>
                  <img src={Trash} alt="" className="w-5" />
                </button>
              </div>
              <button
                className="w-full rounded-lg bg-Orange p-4 font-bold"
                onClick={() => dispatch({ type: "deleteItems" })}
              >
                checkout
              </button>
            </>
          ) : (
            <p className="py-10 text-center font-bold tracking-wider text-DarkGrayishBlue">
              Your cart is empty
            </p>
          )}
        </div>
      )}
    </>
  );
}

export default Cart;
