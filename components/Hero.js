import React from "react";
import Image from "next/image";
import PrimaryButton from "./primaryButton/PrimaryButton";
import { RiArrowRightDownLine } from "react-icons/ri";
import Tokenmonics from "./Tokenomics";
import Footer from "./Footer";
import Our_Partners from "./Our_Partners";
import Navbar from "./Navbar";

const style = {
  main_margin: "2xl:mx-40 lg:mx-32 md:mx-10 mx-3",
  border_x: "border border-y-0",
  content_box_padding: "md:px-14 px-5 py-5",
  content_grid: "grid lg:grid-cols-2	grid-cols-1 items-center",
  content_flex:
    "lg:text-start text-center flex flex-col lg:items-start items-center",
  heading_center: "flex items-center",
  center_items: "flex flex-col lg:items-start items-center",
  border_y: "border border-x-0",
  paragraph_padding_y: "pt-4 pb-12",
};

const Hero = () => {
  return (
    <>
      {/* <div className={`${style.main_margin} ${style.border_x}`}> */}
      {/* ----------------- three star section---------------------------- */}

      <div
        className={`${style.content_box_padding} ${style.border_y} flex gap-5 lg:flex-row flex-col`}
      >
        <div className={style.heading_center}>
          <Image
            src="/assets/icons/star_icon.png"
            height={60}
            width={60}
            alt="star"
          />
          <p className="px-3">Launchpad meets NFT’s and Metaverse ecosystem</p>
        </div>
        <div className={style.heading_center}>
          <Image
            src="/assets/icons/star_icon.png"
            height={60}
            width={60}
            alt="star"
          />
          <p className="px-3">
            Potential 100x ROI’s for future investors of new innovations
          </p>
        </div>
        <div className={style.heading_center}>
          <Image
            src="/assets/icons/star_icon.png"
            height={60}
            width={60}
            alt="star"
          />
          <p className="px-3">
            Experienced tier 1 team with 50 years combined on the blockchain
          </p>
        </div>
      </div>
      <div className={style.content_box_padding}>
        {/* hero section */}

        <div className={style.content_grid}>
          <div className={style.content_flex}>
            <div>
              <h1>/ GAMIFYING </h1>
              <div className={style.heading_center}>
                <h1>OF THE</h1>
                <RiArrowRightDownLine
                  className={`arrow text-[var(--mainColor)]`}
                />
              </div>
              <h1>LAUNCHVERSE</h1>
            </div>
            <p className={style.paragraph_padding_y}>
              Astronaut will take a quantum leap into the future of raising
              capital on the blockchain through a blockbuster system never done
              before.
            </p>
            {/* icon={<HiChevronDoubleRight /> */}
            <div className="flex md:flex-row flex-col gap-5">
              <PrimaryButton>
                <button style={{ padding: ".5rem 2rem" }}>KYC </button>
              </PrimaryButton>
              <PrimaryButton>
                <button style={{ padding: ".5rem 2rem" }}>WHITE PAPER </button>
              </PrimaryButton>
              <PrimaryButton>
                <button style={{ padding: ".5rem 2rem" }}>AUDIT </button>
              </PrimaryButton>
            </div>
          </div>
          <div className={style.order_change}>
            <Image
              src="./assets/images/header.svg"
              width={700}
              height={700}
              priority
              alt="header"
            />
          </div>
        </div>
      </div>

      {/*-------------------- / What is Astronaut? /-------------------- */}
      <div
        id="astronaut"
        className={` lg:px-44 px-5 py-8 border border-x-0 border-b-0`}
      >
        <div>
          <h1 className="text-center">/ What is Astronaut? /</h1>
          <p className="py-5">
            Let’s journey together into the next. Launchpad with ability for
            vestings to be liquid and transferrable through NFT’s. Metaverse and
            DeFi Gamification support ecosystem.
          </p>
        </div>
        <div
          className={`flex gap-x-8  items-center  py-3 border-[var(--mainColor)] ${style.border_y}`}
        >
          <h1 className="text-[#CB8CFA]">01</h1>
          <p>
            Launchpad at it’s core with a DeFi and Metaverse ecosystem to
            follow. Shaping the way and future of presales.
          </p>
        </div>
        <div className="flex gap-x-8 items-center py-3">
          <h1 className="text-[#CB8CFA]">02</h1>
          <p>
            Investors who seek to be part of the most sought after presales can
            enjoy savvy ROI’s on projects that launch on Astronaut.
          </p>
        </div>
        <div
          className={`flex gap-x-8  items-center  py-3 ${style.border_y} border-[var(--mainColor)]`}
        >
          <h1 className="text-[#CB8CFA]">03</h1>
          <p>
            Astronaut will lead the new era and evolved landscape with a state
            of the art platform allowing new ideas to raise capital securely.
          </p>
        </div>
        <div className="flex gap-x-8 items-center py-3  ">
          <h1 className="text-[#CB8CFA]">04</h1>
          <p>
            Information hub and community backed by a team with tier 1
            experience and over 100+ partnerships.
          </p>
        </div>
        <div className="flex  justify-center ">
          <PrimaryButton>
            <button style={{ padding: ".5rem 1rem" }}>
              READ MORE &gt;&gt;
            </button>
          </PrimaryButton>
        </div>
      </div>
      {/* ------------FUTURE BLOCKCHAIN GAMING ------- / About us /---------------------------- */}
      <div
        id="about"
        className={`${style.content_box_padding} ${style.border_y}`}
      >
        <div className={style.content_grid}>
          <div className={`${style.content_flex}  lg:pb-0 pb-12`}>
            <h1>/ About us /</h1>

            <p className="pt-4 pb-12">
              With a combined 50+ years of experience in cryptocurrency we pride
              ourselves on transparency, tireless work ethic and integrity. ,
              Astronaut team is fully doxxed and remotely located globally.
            </p>
            <PrimaryButton>
              <button style={{ padding: ".5rem 1rem" }}>
                READ MORE &gt;&gt;
              </button>
            </PrimaryButton>
          </div>
          <div className={style.order_change}>
            <Image
              src="/assets/images/about1_hero.svg"
              height="700"
              width="700"
              alt="about hero"
            />
          </div>
        </div>
        <div className="">
          <h1 className="stroke-text 2xl:text-[4.4rem] xl:text-[4rem] lg:text-[3.2rem] text-[2rem]">
            FUTURE BLOCKCHAIN GAMING{" "}
          </h1>
        </div>
      </div>
      {/* ------------------/ Gamification Metaverse --------------------------/ */}
      <div className="md:px-14 px-5 py-12 border border-x-0 grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
        <div>
          <Image
            src="/assets/images/metaversh_hero.svg"
            height="700"
            width="700"
            priority
            alt="metavershhero"
          />
        </div>
        <div className={style.center_items}>
          <h1>/ Gamification Metaverse /</h1>
          <p className={style.paragraph_padding_y}>
            First ever integration of metaverse and launchpad gamification
            combining DeFi, community and entertainment to shape the future of
            the blockchain.
          </p>
          <PrimaryButton>
            <button style={{ padding: ".5rem 1rem" }}>
              READ MORE &gt;&gt;
            </button>
          </PrimaryButton>
        </div>
      </div>
      {/* ------------------ / Future of blockchain raises / ------------------ */}
      <div className={`${style.border_y} py-12`}>
        <h1 className="text-center">/ Future of blockchain raises /</h1>
        <div className="md:px-14 px-5 py-12 grid lg:grid-cols-2 grid-cols-1 gap-8 items-center ">
          <div className="pt-8 ">
            <div className="flex justify-between text-[var(--mainColor)] ">
              <h3>STAKING</h3>
              <RiArrowRightDownLine className="text-[3rem]" />
            </div>
            <div className={`${style.border_y} border-[var(--mainColor)] py-3`}>
              <h3>Invest</h3>
              <p>
                Opportunity to get into the most sought after ideas and project
                offerings coming to the market. Astronaut launches will have
                more incentive to buy at both ILO and launch without getting
                dumped on by VC’s, presale and private sale investors.
              </p>
            </div>
            <div className="py-3">
              <h3>Earn</h3>
              <p>
                Earn large APY’s on your vested tokens for believing in projects
                and teams allowing them time to build and roll out development,
                marketing and community.?
              </p>
            </div>
            <div className="border border-x-0 py-3 border-[var(--mainColor)] mb-12">
              <h3>Trade</h3>
              <p>
                Trade your vesting NFT’s on the marketplace for time value.
                Creating a liquid environment for illiquid assets.{" "}
              </p>
            </div>
            <div className={style.center_items}>
              <PrimaryButton>
                <button style={{ padding: ".5rem 1rem" }}>
                  Launchpad dApp
                </button>
              </PrimaryButton>
            </div>
          </div>
          <div className={style.order_change}>
            <Image
              src="/assets/images/blockchain_reses_hero.svg"
              height="700"
              width="700"
              alt="blockchain_hero"
            />
          </div>
        </div>
        <h1 className="stroke-text 2xl:text-[4.4rem] xl:text-[4rem] lg:text-[3.2rem] text-[2rem]">
          THE FUTURE OF GAMING IS NOW !
        </h1>

        <Tokenmonics />
      </div>
      {/* ==================== play with static image4 ------------------ */}
      <Image
        src="/assets/images/plywin.png"
        width={1500}
        height={500}
        priority
        alt="plywin images"
      />
      {/* ------------------------------ / Astronaut News / -----------*/}
      <div className={` ${style.content_box_padding} `} id="news">
        <h1 className="text-center">/ Astronaut News /</h1>
        <div className="border h-[400px] md:w-[70%] w-full bg-white mx-auto my-8 flex items-end">
          <div className="bg-[#8B2AD3] w-full md:h-[100px] h-[150px] p-3">
            june 2 ,2023
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has standard dummy ...
            </p>
            <p className="text-black">read more...</p>
          </div>
        </div>
      </div>
      {/* --------------------------our partners ----------------- */}
      <div className={` ${style.content_box_padding}`}>
        <Our_Partners />
        <h1 className="stroke-text 2xl:text-[4.4rem] xl:text-[4rem] lg:text-[3.2rem] text-[2rem]">
          Buy Astronaut ($NAUT)
        </h1>
      </div>
      <Footer />
      {/* </div> */}
    </>
  );
};

export default Hero;
