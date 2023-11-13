import { useSelector, useDispatch } from "react-redux";
import { addSneakers, removeSneakers, addToCart } from "../features/cart";

export default function Description() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div className="mt-10 xl:mt-0 xl:w-1/2 text-start">
      <p className="uppercase text-orange-500 font-bold">Sneaker Company</p>

      <h1 className="font-bold text-4xl my-5">Fall Limited Edition Sneakers</h1>

      <p className="text-gray-400 text-sm">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex items-center justify-between mt-10 md:flex-col md:items-start">
        <div className="flex">
          <span className="text-2xl font-bold">$125.00</span>
          <span className="rounded-lg font-semibold font-kumbh bg-orange-100 text-orange-500 flex items-center justify-center px-2 py-0 ml-4">
            50%
          </span>
        </div>
        <span className="line-through text-gray-400 font-semibold md:mt-2">
          $250.00
        </span>
      </div>

      <div className="xl:flex xl:items-center xl:justify-center mt-10 pb-20 xl:pb-0">
        <div className="flex items-center justify-between xl:justify-center rounded bg-gray-100 px-4 py-2">
          <button onClick={() => dispatch(removeSneakers())}>
            <img
              src="images/icon-minus.svg"
              alt="icon minus"
              className="xl:max-w-none"
            />
          </button>
          <span className="mx-5">{cart.quantity}</span>
          <button onClick={() => dispatch(addSneakers())}>
            <img
              src="images/icon-plus.svg"
              alt="icon plus"
              className="xl:max-w-none"
            />
          </button>
        </div>
        <button
          onClick={() => dispatch(addToCart())}
          className="w-full flex items-center justify-center mt-4 xl:mt-0  xl:ml-10 bg-orange-500 py-4 xl:py-2 px-5 rounded text-slate-50 hover:opacity-60"
        >
          <span>
            <img
              className="mr-2 w-4"
              src="images/icon-cart.svg"
              alt="icon cart"
            />
          </span>
          <p className="font-semibold text-sm">Add to cart</p>
        </button>
      </div>
    </div>
  );
}
