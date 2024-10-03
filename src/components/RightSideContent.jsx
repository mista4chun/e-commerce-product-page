import Plus from "/icon-plus.svg";
import Minus from "/icon-minus.svg";
import { useCart } from "../contexts/CartContext";

function RightSideContent() {
  const { quantity, dispatch } = useCart();
  return (
    <aside className="mt-0 px-6 md:mt-14">
      <h3 className="pb-2.5 text-sm font-bold uppercase tracking-wider text-DarkGrayishBlue">
        Sneaker Company
      </h3>
      <h1 className="pb-4 text-3xl font-extrabold text-VeryDarkBlue md:text-4xl">
        Fall Limited Edition Sneakers
      </h1>
      <p className="pb-6 font-medium leading-relaxed tracking-wide text-DarkGrayishBlue">
        Theses low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="flex items-start justify-between pb-5 md:flex-col">
        <div className="flex items-center gap-6">
          <p className="text-3xl font-bold">$125.00</p>
          <p className="w-16 rounded-md bg-VeryDarkBlue pb-0.5 pt-1 text-center text-xl font-bold text-white">
            50%
          </p>
        </div>
        <p className="text-xl font-bold text-DarkGrayishBlue md:text-sm">
          <s> $250.00</s>
        </p>
      </div>

      <div className="mb-5 mt-2 flex flex-col gap-3 md:flex-row md:items-start">
        <div className="mb-2 flex grow items-center justify-between rounded-lg bg-LightGrayishBlue p-4 md:p-3">
          <button onClick={() => dispatch({ type: "decrement" })}>
            <img src={Minus} alt="" />
          </button>
          <p className="font-bold">{quantity}</p>
          <button onClick={() => dispatch({ type: "increment" })}>
            <img src={Plus} alt=""  />
          </button>
        </div>
        <button
          onClick={() => dispatch({ type: "addItems" })}
          className="flex grow items-center justify-center gap-4 rounded-lg bg-Orange p-4 font-bold md:p-3 hover:bg-orange-300"
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#000"
            />
          </svg>
          Add to cart
        </button>
      </div>
    </aside>
  );
}

export default RightSideContent;
