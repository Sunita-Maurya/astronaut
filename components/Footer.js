import React from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const style = {
  hoverEffect:
    "cursor-pointer transition-all  hover:scale-125 ease-in duration-500",
};
const Footer = () => {
  return (
    <div className="bg-[#8B2AD3] text-black md:px-14 px-5 py-5 text-xl">
      <div className="flex justify-between lg:flex-row flex-col lg:gap-y-0 gap-y-3 items-center py-8">
        <p>Subscribe for new updates delivered straight to your inbox.</p>
        <div className=" flex justify-between border-2 border-[#000000] bg-[#A644EE] px-3">
          <input
            type="email"
            placeholder="Email Address"
            className="h-14 w-full bg-[#A644EE] border-none outline-none placeholder-white"
          />
          <button className="">Subscribe</button>
          <FiArrowUpRight size={50} />
        </div>
      </div>
      <div className="flex justify-between lg:flex-row flex-col lg:items-start items-center lg:gap-0 gap-y-5 border-2 border-x-0 border-b-0 py-5 border-black">
        <Image
          src="/assets/icons/blacklogo.png"
          width="365"
          height="63"
          alt="blacklogo"
        />
        <div>
          <p className="lg:text-start text-center py-3">Follow our socials</p>
          <div className="flex gap-3">
            <Image
              src="/assets/icons/f_twitter.svg"
              alt="twitter"
              width="48"
              height="45"
              className={style.hoverEffect}
            />
            <Image
              src="/assets/icons/f_telegram.svg"
              alt="telegram"
              width="48"
              height="45"
              className={style.hoverEffect}
            />
            <Image
              src="/assets/icons/f_rattit.svg"
              alt="rattit"
              width="48"
              height="45"
              className={style.hoverEffect}
            />
            <Image
              src="/assets/icons/f_facebook.svg"
              alt="facebook"
              width="48"
              height="45"
              className={style.hoverEffect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
