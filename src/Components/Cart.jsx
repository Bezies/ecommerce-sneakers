import { useSelector, useDispatch } from "react-redux";
import { deleteCart } from "../features/cart";

export default function Cart() {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()


    return (
        <div className="w-[300px] h-[200px] bg-slate-50 flex flex-col items-center absolute top-12 left-[-80px]">
            <p className="mt-5 w-full border-b-[1px] pb-5 font-semibold">Cart</p>
            {(cart.quantity > 0 && cart.addToCart) &&
                <div className="flex items-center justify-between w-3/4 my-6">
                    <img className="w-12 h-12" src="/images/image-product-1-thumbnail.jpg" alt="" />
                    <div>
                        <p className="text-[10px] text-gray-400">Fall Limited Edition Sneakers</p>
                        <p className="text-[10px] text-gray-400">{`$${cart.price} x ${cart.quantity} =`} <span className="font-bold text-black">${(cart.quantity * cart.price).toFixed(2)}</span></p>
                    </div>
                    <button
                        onClick={() => dispatch(deleteCart())}
                    ><span><img src="/images/icon-delete.svg" alt="" /></span></button>
                </div>}
            {cart.quantity > 0 && <button className="bg-orange-400 text-slate-50 text-semibold text-sm px-4 py-2 rounded w-3/4 mb-5">Checkout</button>}
        </div>
    )
}
