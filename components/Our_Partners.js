import React from "react";
import Image from "next/image";
const images = [
  "/assets/icons/kucoin.svg",
  "/assets/icons/bitmart.svg",
  "/assets/icons/chailLink.svg",
  "/assets/icons/uniswap.svg",
  "/assets/icons/lbank.svg",
  "/assets/icons/global.svg",
];

const style = {
  wrapper: `grid  md:grid-cols-3 grid-cols-2 justify-center place-items-center gap-5 py-5 `,
};

const Our_Partners = () => {
  return (
    <>
      <h1 className="text-center py-5">/ Our Partners /</h1>
      <div className={style.wrapper}>
        {images.map((path) => {
          return (
            <Image
              src={path}
              height={30}
              width={100}
              alt={path}
              key={path}
              className="w-auto h-auto "
            />
          );
        })}
      </div>
    </>
  );
};

export default Our_Partners;
