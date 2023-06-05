import React from "react";
import Image from "next/image";
const style = {
  hoverEffect:
    "cursor-pointer transition-all  hover:scale-125 ease-in duration-500 w-auto h-auto",
};
const SocialLinks = () => {
  return (
    <div className="flex   lg:gap-x-5  gap-x-12 ">
      <Image
        src="/assets/icons/twitterframe.svg"
        height={40}
        width={40}
        alt="twitter"
        className={style.hoverEffect}
      />
      <Image
        src="/assets/icons/telegramframe.svg"
        height={40}
        width={40}
        alt="telegram"
        className={style.hoverEffect}
      />
      <Image
        src="/assets/icons/rettitframe.svg"
        height={40}
        width={40}
        alt="rattit"
        className={style.hoverEffect}
      />
      <Image
        src="/assets/icons/facebookframe.svg"
        height={40}
        width={40}
        alt="facebook"
        className={style.hoverEffect}
      />
    </div>
  );
};

export default SocialLinks;
