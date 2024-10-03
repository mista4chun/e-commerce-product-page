import { useState } from "react";
import Next from "/icon-next.svg";
import Prev from "/icon-previous.svg";
import RightSideContent from "./RightSideContent";
import Close from "/icon-close2.svg";

const data = [
  {
    id: 1,
    image: "/image-product-1.jpg",
    thumbnail: "/image-product-1-thumbnail.jpg",
  },
  {
    id: 2,
    image: "/image-product-2.jpg",
    thumbnail: "/image-product-2-thumbnail.jpg",
  },
  {
    id: 3,
    image: "/image-product-3.jpg",
    thumbnail: "/image-product-3-thumbnail.jpg",
  },
  {
    id: 4,
    image: "/image-product-4.jpg",
    thumbnail: "/image-product-4-thumbnail.jpg",
  },
];

function ShowCase() {
  const [value, setValue] = useState(0);
  const products = [...data];
  const { image } = products[value];
  const [showLightBox, setShowLightBox] = useState(false);

  function handlePrevImage() {
    if (value >= 1) setValue((value) => value - 1);
  }

  function handleNextImage() {
    if (value < 3) setValue((value) => value + 1);
  }
  return (
    <>
      <LightBox
        value={value}
        setValue={setValue}
        products={products}
        image={image}
        handleNextImage={handleNextImage}
        handlePrevImage={handlePrevImage}
        showLightBox={showLightBox}
        setShowLightBox={setShowLightBox}
      />
      <section className="relative mt-0 grid grid-cols-1 md:mt-20 md:grid-cols-2 md:px-6">
        <div>
          <div className="relative">
            <img
              src={image}
              alt=""
              onClick={() => setShowLightBox(!showLightBox)}
              className="mb-6 w-full md:w-[25.4rem] md:rounded-lg"
            />
            <div className="md:hidden">
              <button
                onClick={handlePrevImage}
                className="absolute left-0 top-1/2 mx-6 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-BgWhite p-3.5 transition-all duration-200"
              >
                <img src={Prev} alt="" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-0 top-1/2 mx-6 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-BgWhite p-3.5 transition-all duration-200"
              >
                <img src={Next} alt="" />
              </button>
            </div>
          </div>

          <ul className="flex items-center gap-7">
            {products.map((el, index) => (
              <li key={el.id} onClick={() => setValue(index)}>
                <img
                  src={el.thumbnail}
                  alt=""
                  className={`hidden w-20 rounded-lg transition-all hover:opacity-40 duration-300 md:block ${index === value ? "border-2 border-Orange opacity-40" : ""}`}
                />
              </li>
            ))}
          </ul>
        </div>
        <RightSideContent />
      </section>
    </>
  );
}

export default ShowCase;

function LightBox({
  value,
  setValue,
  products,
  image,
  handleNextImage,
  handlePrevImage,
  showLightBox,
  setShowLightBox,
}) {
  return showLightBox ? (
    <div className="absolute inset-0 z-50 hidden items-center justify-center bg-black/80 md:grid">
      <figure>
        <img
          src={Close}
          alt=""
          className="fixed md:right-[31%]  md:top-24 w-5"
          onClick={() => setShowLightBox(!showLightBox)}
        />
      </figure>
      <div>
        <img
          src={image}
          alt=""
          className="hidden md:block md:w-[30rem] md:rounded-xl"
        />
        <div className="relative hidden md:block">
          <button
            onClick={handlePrevImage}
            className="absolute -left-6 -top-64 flex h-12 w-12 items-center justify-center rounded-full bg-BgWhite p-3.5 transition-all duration-200"
          >
            <img src={Prev} alt="" />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute -right-6 -top-64 flex h-12 w-12 items-center justify-center rounded-full bg-BgWhite p-3.5 transition-all duration-200"
          >
            <img src={Next} alt="" />
          </button>
        </div>
      </div>

      <ul className="-mt-16 flex items-center justify-center gap-8">
        {products.map((el, index) => (
          <li key={el.id} onClick={() => setValue(index)}>
            <img
              src={el.thumbnail}
              alt=""
              className={`hidden w-20 rounded-lg transition-all duration-300 md:block ${index === value ? "border-2 border-Orange opacity-40" : ""}`}
            />
          </li>
        ))}
      </ul>
    </div>
  ) : (
    ""
  );
}
