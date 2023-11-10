import { useSelector, useDispatch } from "react-redux";
import { addSneakers, removeSneakers, addToCart } from "../features/cart";

export default function Description() {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)


    return (
        <div className="mt-10 xl:mt-0 xl:w-1/2 text-start">
            <p className="uppercase text-orange-500 font-bold">Sneaker Company</p>

            <h1 className="font-bold text-4xl my-5">Fall Limited Edition Sneakers</h1>

            <p className="text-gray-400 ">
                These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>

            <div className="flex mt-10 mb-2">
                <span className="text-2xl font-bold">$125.00</span>
                <span className="rounded bg-orange-100 text-orange-500 flex items-center justify-center px-2 py-0 ml-4">50%</span>
            </div>
            <span className="line-through text-gray-400 font-semibold">$250.00</span>

            <div className="flex items-center mt-10">
                <div className="flex items-center rounded bg-gray-100 px-4 py-2">
                    <button onClick={() => dispatch(removeSneakers())}><img src="images/icon-minus.svg" alt="icon minus" /></button>
                    <span className="mx-5">{cart.quantity}</span>
                    <button onClick={() => dispatch(addSneakers())}><img src="images/icon-plus.svg" alt="icon plus" /></button>
                </div>
                <button
                    onClick={() => dispatch(addToCart())}
                    className="flex items-center ml-10 bg-orange-500 py-2 px-5 rounded text-slate-50 hover:opacity-60">
                    <span><img className="mr-5" src="images/icon-cart.svg" alt="icon cart" />
                    </span>Add to cart</button>
            </div>
        </div>
    )
}