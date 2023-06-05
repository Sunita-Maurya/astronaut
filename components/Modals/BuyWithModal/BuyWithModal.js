import React from "react";
import Image from "next/image";
import PrimaryButton from "../../primaryButton/PrimaryButton";
const BuyWithModal = ({ closeModal }) => {
  return (
    <div className="relative  my-5 mx-auto ">
      <div
        className="  md:px-12 px-2  mx-4 pb-8 bg-no-repeat bg-contain  rounded-lg shadow-lg relative flex flex-col  outline-none focus:outline-none"
        style={{
          backgroundImage: "url('./assets/images/popupbg.png')",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="   lg:pt-5 pt-2">
          <button
            className="bg-transparent border-0  float-right"
            onClick={closeModal}
          >
            <span className="text-[#8B2AD3]  h-6 w-6 text-2xl block">
              <Image
                src="/assets/icons/X_button.png"
                height={20}
                width={20}
                alt="cut button"
              />
            </span>
          </button>
        </div>
        <div className="flex   text-center flex-col  md:px-20 py-5   rounded-t text-[#8B2AD3] ">
          <div className="text-center ">
            <h3 className="md:text-xl text-center  text-sm font=semibold uppercase">
              BUY WITH USDT
            </h3>
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/icons/leftarrow.png"
              width={35}
              height={10}
              alt="left arrow"
              className=""
            />
            <p className=" md:px-5 px-1">1 UST = 0000.00 NAUT</p>
            <Image
              src="/assets/icons/rightarrow.png"
              width={35}
              height={100}
              alt="left arrow"
            />
          </div>
        </div>
        <div
          className=" py-6 md:px-8 px-3 mx-5 flex-auto bg-contain bg-no-repeat  bg-center flex justify-center gap-8 items-center"
          style={{
            backgroundImage: "url('./assets/images/innerpopupbg.png')",
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="text-center">
            <label htmlFor="USDT Amount">USDT Amount</label>
            <input type="text" placeholder="0" />
            <label htmlFor="NAUT Tokens">NAUT Tokens</label>
            <input type="text" placeholder="0" />
            <div className="px-12 py-6">
              <PrimaryButton mixcolora={"#000249"} mixcolorb={"#010138"}>
                <button className="py-2">Buy</button>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyWithModal;
