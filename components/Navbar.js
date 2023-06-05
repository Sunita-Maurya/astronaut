import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import claimArrow from "../public/assets/icons/claim_arr.svg";
import { GoThreeBars } from "react-icons/go";
import { CgClose } from "react-icons/cg";
import PrimaryButton from "./primaryButton/PrimaryButton";
import SocialLinks from "./SocialLinks";
//
const style = {
  hoverEffect:
    "cursor-pointer transition-all  hover:scale-125 ease-in duration-500 ",
};

const Navbar = ({
  links,
  socialIncons,
  claimbtn,
  socialLinksbox,
  astronautref,
  aboutref,
  tokenomicsref,
}) => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="text-white" style={{ borderBottom: "1px solid white" }}>
      <div>
        <nav className="w-full h-full ">
          <div
            className="
               mx-auto lg:py-0 py-5  lg:flex lg:items-center"
          >
            <div className="">
              <div className="flex w-full  items-center justify-between  px-5    ">
                <Image
                  src="/assets/icons/white_logo.png"
                  alt="Picture of the author"
                  width={250}
                  height={250}
                  className="lg:w-auto w-52"
                />

                <div className="lg:hidden font-['Montserrat'] ">
                  <button
                    className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? <CgClose /> : <GoThreeBars />}
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full  font-['Montserrat'] pr-2 border border-y-0 lg:text-[14px] text-sm ">
              <div
                className={`flex-1  justify-self-center items-center ${
                  socialLinksbox ? "lg:hidden" : "lg:block"
                } pb-3 mt-8  md:pt-5 lg:mt-0 ${navbar ? "block" : "hidden"}`}
              >
                {links && (
                  <ul className=" flex items-center justify-around  lg:flex-row flex-col space-y-5 lg:flex  lg:space-y-0 ">
                    <li
                      className="text-white whitespace-nowrap cursor-pointer transition-all hover:bg-gray-100 hover:text-black py-2  px-1 rounded"
                      onClick={() => {
                        astronautref.current.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      What is Astronaut
                    </li>
                    <li
                      className="text-white whitespace-nowrap cursor-pointer transition-all hover:bg-gray-100 hover:text-black py-2 lg:px-4 px-1 rounded"
                      onClick={() => {
                        aboutref.current.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      About Us
                    </li>
                    <li
                      className="text-white cursor-pointer transition-all hover:bg-gray-100 hover:text-black py-2 lg:px-4 px-1 rounded"
                      onClick={() => {
                        tokenomicsref.current.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      Tokenomics
                    </li>
                    <li className="text-white  cursor-pointer transition-all hover:bg-gray-100 hover:text-black py-2 lg:px-4 px-1 rounded">
                      <Link href="/contact">News</Link>
                    </li>
                    {socialIncons && (
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
                    )}

                    {claimbtn && (
                      <div className="lg:pr-5">
                        <PrimaryButton>
                          <button className="py-1 pl-5  pr-1 flex justify-center items-center uppercase">
                            Claim
                            {/* <span> */}
                            <Image
                              // src="/assets/icons/claim_arr.svg"
                              src={claimArrow}
                              height={20}
                              width={20}
                              alt="claim arrow"
                              className="w-5  aspect-square"
                            />
                            {/* </span> */}
                          </button>
                        </PrimaryButton>
                      </div>
                    )}
                  </ul>
                )}
              </div>

              {socialLinksbox && (
                <div className=" lg:flex justify-end py-3 hidden">
                  <SocialLinks />
                </div>
              )}
              {navbar && socialLinksbox ? (
                <div className="flex justify-center">
                  <SocialLinks />
                </div>
              ) : (
                ""
              )}
            </div>
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
