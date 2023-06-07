import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import claimArrow from "../public/assets/icons/claim_arr.svg";
import { GoThreeBars } from "react-icons/go";
import { CgClose } from "react-icons/cg";
import PrimaryButton from "./primaryButton/PrimaryButton";

const style = {
  hoverEffect:
    "cursor-pointer transition-all  hover:scale-125 ease-in duration-500 ",
};

const Navbar = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="text-white relative"
      style={{ borderBottom: "1px solid white" }}
    >
      <div>
        <nav className="w-full h-full ">
          <div
            className="
               mx-auto lg:py-2 py-5  lg:flex lg:items-center flex justify-between"
          >
            <div className="flex justify-between lg:w-full xl:w-auto items-center">
              <div className="flex w-full  items-center justify-between  px-5    ">
                <Image
                  src="/assets/icons/white_logo.png"
                  alt="Picture of the author"
                  width={250}
                  height={250}
                  className="lg:w-auto w-52"
                />
              </div>
            </div>
            <div className="xl:hidden    font-['Montserrat'] ">
              <button
                className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <CgClose className="text-3xl" />
                ) : (
                  <GoThreeBars className="text-3xl" />
                )}
              </button>
            </div>
            <div className="xl:block hidden w-full  font-['Montserrat'] pr-2 border border-y-0 lg:text-[14px] text-sm ">
              <div
                className={`flex-1  justify-self-center items-center 
                } pb-3 mt-8  md:pt-5 lg:mt-0`}
              >
                <ul className="text-[18px] flex items-center justify-around  lg:flex-row flex-col space-y-5 lg:flex  lg:space-y-0 ">
                  <li className="text-white   whitespace-nowrap cursor-pointer transition-all hover:text-[#8B2AD3] rounded">
                    <a href="#astronaut " className=" py-2  px-1 block">
                      What is Astronaut
                    </a>
                  </li>
                  <li className="text-white whitespace-nowrap cursor-pointer transition-all hover:text-[#8B2AD3] py-2 lg:px-4 px-1 rounded">
                    <a href="#about" className=" py-2  px-1 block">
                      About Us
                    </a>
                  </li>
                  <li className="text-white cursor-pointer transition-all hover:text-[#8B2AD3] py-2 lg:px-4 px-1 rounded">
                    <a href="#tokenmonics" className=" py-2  px-1 block">
                      Tokenomics
                    </a>
                  </li>
                  <li className="text-white  cursor-pointer transition-all hover:text-[#8B2AD3] py-2 lg:px-4 px-1 rounded">
                    <a href="#news" className=" py-2  px-1 block">
                      News
                    </a>
                  </li>
                  <div className="flex xl:gap-x-5 lg:gap-x-5   gap-x-14 gap-y-auto">
                    <Link href="">
                      <Image
                        src="./assets/icons/twitter.svg"
                        width={40}
                        height={40}
                        alt="twiter"
                        className={`${style.hoverEffect} w-8`}
                      />
                    </Link>
                    <Link href="">
                      <Image
                        src="./assets/icons/telegram.svg"
                        width={40}
                        height={40}
                        alt="telegram"
                        className={`${style.hoverEffect} w-8`}
                      />
                    </Link>
                    <Link href="">
                      <Image
                        src="./assets/icons/metamask.svg"
                        width={40}
                        height={40}
                        alt="metamsk"
                        className={`${style.hoverEffect} w-8`}
                      />
                    </Link>
                    <Link href="" className="mr-5">
                      <Image
                        src="./assets/icons/facebook.svg"
                        width={20}
                        height={20}
                        alt="facebook"
                        className={`${style.hoverEffect} w-4`}
                      />
                    </Link>
                  </div>

                  <div className="lg:pr-5">
                    <PrimaryButton>
                      <button className="py-1 pl-5  pr-1 flex justify-center items-center uppercase">
                        Claim
                        <Image
                          // src="/assets/icons/claim_arr.svg"
                          src={claimArrow}
                          height={20}
                          width={20}
                          alt="claim arrow"
                          className="w-5  aspect-square"
                        />
                      </button>
                    </PrimaryButton>
                  </div>
                </ul>
              </div>
            </div>
            {/* ---------- mobile view------ */}
            {menuOpen && (
              <div
                className={`absolute  top-20 right-0 bg-[#381154ee] xl:hidden font-['Montserrat'] rounded-3xl pr-2 lg:text-[14px] text-sm p-8 z-20 transition-all
              `}
              >
                <div
                  className={`  justify-self-center items-center 
                } pb-3 mt-8  md:pt-5 lg:mt-0`}
                >
                  <ul className=" flex flex-col items-center justify-around   space-y-5 lg:flex  lg:space-y-0 ">
                    <li className="text-white whitespace-nowrap cursor-pointer transition-all hover:text-[#8B2AD3] py-2  px-1 rounded">
                      <a href="#astronaut " className=" py-2  px-1 block">
                        What is Astronaut
                      </a>{" "}
                    </li>
                    <li className="text-white whitespace-nowrap cursor-pointer transition-all hover:text-[#8B2AD3] py-2 lg:px-4 px-1 rounded">
                      <a href="#about" className=" py-2  px-1 block">
                        About Us
                      </a>{" "}
                    </li>
                    <li className="text-white cursor-pointer transition-all hover:text-[#8B2AD3] py-2 lg:px-4 px-1 rounded">
                      <a href="#tokenmonics" className=" py-2  px-1 block">
                        Tokenomics
                      </a>
                    </li>
                    <li className="text-white  cursor-pointer transition-all hover:text-[#8B2AD3] py-2 lg:px-4 px-1 rounded">
                      <a href="#news" className=" py-2  px-1 block">
                        News
                      </a>{" "}
                    </li>
                    <div className="flex py-8     gap-x-14 gap-y-auto">
                      <Link href="">
                        <Image
                          src="./assets/icons/twitter.svg"
                          width={40}
                          height={40}
                          alt="twiter"
                          className={`${style.hoverEffect} w-8`}
                        />
                      </Link>
                      <Link href="">
                        <Image
                          src="./assets/icons/telegram.svg"
                          width={40}
                          height={40}
                          alt="telegram"
                          className={`${style.hoverEffect} w-8`}
                        />
                      </Link>
                      <Link href="">
                        <Image
                          src="./assets/icons/metamask.svg"
                          width={40}
                          height={40}
                          alt="metamsk"
                          className={`${style.hoverEffect} w-8`}
                        />
                      </Link>
                      <Link href="" className="mr-5">
                        <Image
                          src="./assets/icons/facebook.svg"
                          width={20}
                          height={20}
                          alt="facebook"
                          className={`${style.hoverEffect} w-4`}
                        />
                      </Link>
                    </div>

                    <div className="lg:pr-5">
                      <PrimaryButton
                        mixcolora={"#381154"}
                        mixcolorb={"#381154"}
                      >
                        <button className="py-1 pl-5  pr-1 flex justify-center items-center uppercase">
                          Claim
                          <Image
                            // src="/assets/icons/claim_arr.svg"
                            src={claimArrow}
                            height={20}
                            width={20}
                            alt="claim arrow"
                            className="w-5  aspect-square"
                          />
                        </button>
                      </PrimaryButton>
                    </div>
                  </ul>
                </div>
              </div>
            )}
            {/* ---------------- */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

/**
 * <Navbar socialIcons = false/>
 *
 *
 *
 * const Navbar = ({socialIcons = true, links=true})=>{
 *
 *  { socialIcons && <div>social icons</div> }
 *
 *
 *
 * }
 *
 *
 *
 */
