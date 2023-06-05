import React from "react";
import Image from "next/image";
const images = [
  "/assets/icons/kucoin.svg",
  "/assets/icons/meritCircle.svg",
  "/assets/icons/chailLink.svg",
  "/assets/icons/kaddex.svg",
  "/assets/icons/gate.svg",
  "/assets/icons/kadena.svg",
  "/assets/icons/citizen.svg",
  "/assets/icons/shiba.svg",
  "/assets/icons/polygon.svg",
];

const style = {
  wrapper: `grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 py-5 `,
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
