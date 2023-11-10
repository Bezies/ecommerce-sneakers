import { useState } from "react"
import { createPortal } from "react-dom"
import Modal from "./Modal"
import sliderData from "../data/sliderData"

export default function LightBox() {

    const [modal, setModal] = useState(false)
    const [image, setImage] = useState(1)


    return (
        <div className="xl:w-3/4 mx-auto  xl:pl-10">
            <div
                className="mt-10 cursor-pointer">
                <img
                    onClick={() => setModal(!modal)}
                    className="rounded w-96 h-96" src={`images/image-product-${image}.jpg`} alt="" />
            </div>
            <div className="flex items-center justify-between w-96 mt-10">
                {sliderData.map((image, index) => (
                    <img
                        key={image.id}
                        onClick={() => setImage(index + 1)}
                        className="rounded h-20 w-20 mr-3 cursor-pointer active:border active:border-orange-500 " src={image.url} alt="" />
                ))}
            </div>
            {modal && createPortal(<Modal closeModal={() => setModal(!modal)} image={image} setImage={setImage} />, document.body)}
        </div>
    )
}