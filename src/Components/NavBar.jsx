import { useSelector, useDispatch } from "react-redux";
import { openCart, addToCart } from "../features/cart";
import Cart from "./Cart";
import { toggleMenu } from "../features/hamburger";

export default function NavBar() {
  const cart = useSelector((state) => state.cart);
  const menu = useSelector((state) => state.hamburger);
  const dispatch = useDispatch();

  return (
    <nav className="flex justify-between items-center pt-4 pb-8 w-4/5 mx-auto border-b-[1px]">
      <div className="flex items-center justify-between">
        <button onClick={() => dispatch(toggleMenu())}>
          <img
            src="images/icon-menu.svg"
            alt="hamburger button"
            className="md:hidden mr-4 inline"
          />
        </button>
        <img src="images/logo.svg" alt="icon logo" className="mr-10" />

        <ul
          className={`${
            menu.hamburger
              ? "bg-white top-0 left-0 p-4 text-left h-screen w-2/3 absolute z-10"
              : "hidden md:flex md:items-center"
          }`}
        >
          {menu.hamburger && (
            <li>
              <span>
                <img
                  onClick={() => dispatch(toggleMenu())}
                  className="w-4 h-4 block mt-2 cursor-pointer"
                  src="images/icon-close-gray.svg"
                  alt=""
                />
              </span>
            </li>
          )}
          <li className={`${menu.hamburger ? "mt-10" : "ml-4"}`}>
            <a
              className={`${
                menu.hamburger
                  ? "text-black font-semibold"
                  : "text-gray-400 md:hover:border-b-4 md:hover:border-orange-400 md:hover:pb-10"
              }`}
              href="#"
            >
              Collections
            </a>
          </li>
          <li className={`${menu.hamburger ? "mt-5" : "ml-4"}`}>
            <a
              className={`${
                menu.hamburger
                  ? "text-black font-semibold"
                  : "text-gray-400 md:hover:border-b-4 md:hover:border-orange-400 md:hover:pb-10"
              }`}
              href="#"
            >
              Men
            </a>
          </li>
          <li className={`${menu.hamburger ? "mt-5" : "ml-4"}`}>
            <a
              className={`${
                menu.hamburger
                  ? "text-black font-semibold"
                  : "text-gray-400 md:hover:border-b-4 md:hover:border-orange-400 md:hover:pb-10"
              }`}
              href="#"
            >
              Women
            </a>
          </li>
          <li className={`${menu.hamburger ? "mt-5" : "ml-4"}`}>
            <a
              className={`${
                menu.hamburger
                  ? "text-black font-semibold"
                  : "text-gray-400 md:hover:border-b-4 md:hover:border-orange-400 md:hover:pb-10"
              }`}
              href="#"
            >
              About
            </a>
          </li>
          <li className={`${menu.hamburger ? "mt-5" : "ml-4"}`}>
            <a
              className={`${
                menu.hamburger
                  ? "text-black font-semibold"
                  : "text-gray-400 md:hover:border-b-4 md:hover:border-orange-400 md:hover:pb-10"
              }`}
              href="#"
            >
              Contact
            </a>
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
        <img
          src="images/image-avatar.png"
          alt=""
          className="hover:border-2 hover:border-orange-400 hover:rounded-full cursor-pointer w-10 h-10"
        />
      </div>
    </nav>
  );
}
