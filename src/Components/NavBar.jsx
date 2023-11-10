import { useSelector, useDispatch } from "react-redux";
import { openCart, addToCart } from "../features/cart";
import Cart from "./Cart";

export default function NavBar() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <nav className="flex justify-between items-center pb-10 w-3/4 mx-auto border-b-[1px]">
      <div className="flex items-center justify-between">
        <img src="images/logo.svg" alt="icon logo" className="mr-10" />
        <ul className="flex items-center">
          <li className="mx-2 text-gray-400 hover:border-b-2 hover:border-orange-400">
            <a href="#">Collections</a>
          </li>
          <li className="mx-2 text-gray-400">
            <a href="#">Men</a>
          </li>
          <li className="mx-2 text-gray-400">
            <a href="#">Women</a>
          </li>
          <li className="mx-2 text-gray-400">
            <a href="#">About</a>
          </li>
          <li className="mx-2 text-gray-400">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between w-24 relative">
        {/* ICON CART  */}
        <img
          onClick={() => dispatch(openCart())}
          className="cursor-pointer"
          src="images/icon-cart.svg"
          alt="icon cart"
        />

        {/* Ajouter bulle quantity panier  */}
        {cart.quantity > 0 && cart.addToCart && (
          <span className="bg-orange-400 text-slate-50 font-semibold text-[8px] rounded-full px-1.5 absolute top-0 left-2">
            {cart.quantity}
          </span>
        )}

        {/* Ouvrir panier  */}
        {cart.open && <Cart />}
        <img src="images/image-avatar.png" alt="" className="w-10 h-10" />
      </div>
    </nav>
  );
}
