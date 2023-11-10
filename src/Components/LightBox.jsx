import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";
import sliderData from "../data/sliderData";
import { useSelector } from "react-redux";

export default function LightBox() {
  // OPEN MODAL LIGHTBOX DESKTOP VERSION
  const [modal, setModal] = useState(false);

  // CHANGE IMAGE MOBILE VERSION
  const [image, setImage] = useState(1);

  const menu = useSelector((state) => state.hamburger);

  // CHANGE IMAGE MOBILE VERSION
  function toggleImage(indexImage) {
    let newState;
    if (image + indexImage > sliderData.length) {
      newState = 1;
    } else if (image + indexImage < 1) {
      newState = sliderData.length;
    } else {
      newState = image + indexImage;
    }
    setImage(newState);
  }

  return (
    <div className="w-full md:w-3/4 mx-auto  md:pl-10">
      <div className="mt-10 cursor-pointer relative">
        <img
          onClick={() => setModal(!modal)}
          className="rounded w-full md:w-96"
          src={`images/image-product-${image}.jpg`}
          alt=""
        />
        <button
          onClick={() => toggleImage(-1)}
          className="rounded-full bg-slate-50 py-2 px-3 flex items-center justify-center absolute top-1/2 left-2 -translate-y-1/2 md:hidden"
        >
          <span>
            <img src="images/icon-previous.svg" alt="icon previous" />
          </span>
        </button>
        <button
          onClick={() => toggleImage(1)}
          className="rounded-full bg-slate-50 py-2 px-3 flex items-center justify-center absolute top-1/2 right-2 -translate-y-1/2 md:hidden"
        >
          <span>
            <img src="images/icon-next.svg" alt="" />
          </span>
        </button>
      </div>
      <div className="hidden md:flex md:items-center md:justify-between md:w-96 md:mt-10">
        {sliderData.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setImage(index + 1)}
            className="focus:border-2 focus:border-orange-500 focus:opacity-30 hover:opacity-60 rounded-md h-20 w-20 cursor-pointer"
          >
            <img
              className="rounded h-18 w-18 mr-3 cursor-pointer"
              src={image.url}
              alt=""
            />
          </button>
        ))}
      </div>
      {modal &&
        createPortal(
          <Modal
            closeModal={() => setModal(!modal)}
            image={image}
            setImage={setImage}
          />,
          document.body
        )}
    </div>
  );
}
