import { useState } from "react";
import sliderData from "../data/sliderData";

export default function Modal({ closeModal }) {
  const [imageLightBox, setImageLightBox] = useState(1);

  function toggleImage(indexImage) {
    let newState;
    if (imageLightBox + indexImage > sliderData.length) {
      newState = 1;
    } else if (imageLightBox + indexImage < 1) {
      newState = sliderData.length;
    } else {
      newState = imageLightBox + indexImage;
    }
    setImageLightBox(newState);
  }

  function sliderLightbox(e, index) {
    e.stopPropagation();
    setImageLightBox(index + 1);
  }

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 bg-zinc-950/75 flex flex-col items-center justify-center"
    >
      <div onClick={(e) => e.stopPropagation()} className="mt-10 relative">
        <img
          className="w-96 h-96 rounded-lg"
          src={`images/image-product-${imageLightBox}.jpg`}
          alt=""
        />
        <button
          onClick={() => toggleImage(-1)}
          className="rounded-full bg-slate-50 py-3 px-4 flex items-center justify-center absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <span>
            <img src="images/icon-previous.svg" alt="icon previous" />
          </span>
        </button>
        <button
          onClick={() => toggleImage(1)}
          className="rounded-full bg-slate-50 py-3 px-4 flex items-center justify-center absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2"
        >
          <span>
            <img src="images/icon-next.svg" alt="" />
          </span>
        </button>
        <button onClick={closeModal}>
          <img
            className="absolute -top-10 right-0 w-5 h-5"
            src="images/icon-close.svg"
            alt=""
          />
        </button>
      </div>
      <div className="flex items-center justify-between w-96 mt-10">
        {sliderData.map((image, index) => (
          <button
            className="h-20 w-20 rounded-md cursor-pointer focus:border-2 focus:border-orange-500 focus:opacity-30 hover:opacity-60"
            onClick={(e) => sliderLightbox(e, index)}
          >
            <img
              key={image.id}
              className="h-18 w-18 mr-3 rounded-md"
              src={image.url}
              alt=""
            />
          </button>
        ))}
      </div>
    </div>
  );
}
