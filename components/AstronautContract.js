import React from "react";
import Image from "next/image";
const style = {
  grid_container: "grid lg:grid-cols-2 grid-cols-1 gap-x-12 place-items-center",
  order_change: "lg:order-none order-first",
};
export const AstronautContract = () => {
  return (
    <div className="md:px-14 px-5 py-8">
      {/* <div className={style.grid_container} */}

      <h1 className="text-center md:py-12 py-0">/ ASTRONAUT CONTRACT /</h1>
      <div className="flex lg:flex-row flex-col gap-x-32 gap-5 items-center py-5">
        <div>
          <Image
            src="./assets/images/Token.svg"
            width={300}
            height={300}
        
            alt="TokenContract"
            className="w-auto h-auto"

          />
        </div>
        <div className="text-[#8B2AD3] text-lg ">
          <h4>
            Adderess: <span className="text-white">472904728490238</span>
          </h4>
          <h4>
            Decimals: <span className="text-white">34</span>
          </h4>
          <h4>
            Token Symbol: <span className="text-white">NAUT</span>
          </h4>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
