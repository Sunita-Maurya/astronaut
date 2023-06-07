import React from "react";
import Image from "next/image";
function ModalForWallet({ setModalOpen }) {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-[#00000088] z-20">
      <div
        className="bg-no-repeat  md:px-12 px-3 pt-5 md:pb-8   rounded-lg shadow-lg relative flex flex-col  outline-none focus:outline-none"
        style={{
          backgroundImage: "url('./assets/images/popupbg.png')",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="pt-2 pl-12 text-end">
          <button
            className="bg-transparent border-0  float-right"
            onClick={() => setModalOpen(false)}
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
        <div className="flex items-center md:p-5 p-2 rounded-t text-[#8B2AD3] ">
          <Image
            src="/assets/icons/leftarrow.png"
            width={35}
            height={10}
            alt="left arrow"
            className=""
          />
          <h3 className="md:text-xl md:px-8  px-5   text-sm font-semibold uppercase">
            Select Provider
          </h3>
          <Image
            src="/assets/icons/rightarrow.png"
            width={35}
            height={100}
            alt="left arrow"
          />
        </div>
        <div
          className=" relative py-8 flex-auto  bg-no-repeat  bg-center flex justify-center gap-8 items-center"
          style={{
            backgroundImage: "url('/assets/images/innerpopupbg.png')",
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
          }}
        >
          <div
            className="    px-3 hover:shadow-sm cursor-pointer transition-all hover:shadow-[var(--mainColor)]"
          >
            <Image
              src="/assets/images/metamask.svg"
              width={80}
              height={80}
              alt="metamask"
            />
            <p className="pt-2">Metamask</p>
          </div>
          <div
            className=" px-2 hover:shadow-sm cursor-pointer transition-all hover:shadow-[var(--mainColor)]"
          >
            <Image
              src="/assets/images/wallet.svg"
              width={100}
              height={100}
              alt="metamask"
            />
            <p className="pt-4">Wallet Connect</p>
          </div>
        </div>
        <div className="flex items-center justify-end p-6  rounded-b"></div>
      </div>
    </div>
  );
}

export default ModalForWallet;
