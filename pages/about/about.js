import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Our_Partners from "../../components/Our_Partners";
import Head from "next/head";
import Footer from "../../components/Footer";
const style = {
  main_margin: "2xl:mx-40 lg:mx-32 md:mx-10 mx-3",
  border_x: "border border-y-0",
  container_padding: "md:px-14 px-5 ",
  grid_container: "grid lg:grid-cols-2 py-8	grid-cols-1 lg:gap-12 items-center",
  order_change: "lg:order-none order-first",
};
const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className="container mx-auto">
        <div className={`${style.main_margin} ${style.border_x}`}>
          <Navbar socialIncons={false} links={true} claimbtn={true} socialLinksbox={false} />
          <div className={style.container_padding}>
            <div className={style.grid_container}>
              <div>
                <h1>Our Mission</h1>
                <hr />
                <p className="py-3">
                  To bridge the gap between Web2 and Web3 giving our community the ability to “live” the blockchain with
                  an exceptionally smooth experience.
                </p>
              </div>
              <div>
                <Image src="/assets/images/about1_hero.svg" height="700" width="700" priority alt="about_hero" />
              </div>
            </div>
            {/* -------------------- Introduction --------- */}
            <div className={style.grid_container}>
              <div>
                <Image src="/assets/images/introduction_token.svg" height="700" width="700" alt="about_hero" />
              </div>
              <div className={style.order_change}>
                <h1>Introduction</h1>
                <hr />
                <p className="py-3">
                  Astronaut is a pioneer launchpad founded by a team of crypto enthusiasts with years of experience in
                  the field; passionate about taking you and your investing experience to the next level by unleashing
                  the tremendous potential of blockchain upon it.
                </p>

                <p className="py-3">
                  What sets Astronaut apart? Our research and development prowess mixed with leaders who understand the
                  ins and outs on all aspects of the blockchain. We have a strong track record in the past with over
                  5000x ROI to our Astronaut’s.{" "}
                </p>

                <p className="py-3">
                  Alongside our talented team of in-house designers, developers, and specialists, Astronaut is partnered
                  with some of the largest platforms across the blockchain.{" "}
                </p>
              </div>
            </div>
            {/* ------------------- our values--------- */}
            <div className={style.grid_container}>
              <div>
                <h1>Our Values</h1>
                <hr />
                <div className="py-5">
                  <h3>Passion and work ethic </h3>
                  <p>
                    We’re passionate about empowering the community through our actions. We seek to educate and lead our
                    Astronauts to allow them a chance at financial freedom.
                  </p>
                </div>
                <hr />
                <div className="py-5">
                  <h3>Ambition meets drive</h3>
                  <p>
                    We’re not afraid to make big plans, because we meet them with diligent effort. Constant optimization
                    and the highest quality standards ensure end to end excellence.
                  </p>
                </div>
                <hr />
                <div className="py-5">
                  <h3>Built for the real world</h3>
                  <p>
                    Ease of use is a significant hurdle in the use case of blockchain and crypto. We’re here to change
                    that. Our utility and launchpad is for everyone to enjoy fashioned with a smooth UI/UX interface.{" "}
                  </p>
                </div>
              </div>
              <div>
                <Image src="/assets/images/ourValue_hero.svg" height="700" width="700" alt="about_hero" />
              </div>
            </div>
            <Our_Partners />
            {/* ------------------------ FAQS */}
            <div className="py-12">
              <h3 className="pt-3">FAQS</h3>

              <div className="c">
                <input className="input-box" type="checkbox" id="faq-1" />
                <div className="ques">
                  <label htmlFor="faq-1">
                    <span className="pr-5">01</span> HOW DO I STAKE?{" "}
                  </label>
                </div>
                <div className="p">
                  <p className="ans">This a very very simple accordion.</p>
                </div>
              </div>
              <div className="c">
                <input className="input-box" type="checkbox" id="faq-2" />
                <div className="ques">
                  <label htmlFor="faq-2">
                    <span className="pr-5">02</span>WHAT IS STAKING?
                  </label>
                </div>
                <div className="p">
                  <p className="ans">Yes with pure CSS and HTML.</p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="stroke-text 2xl:text-[4.4rem] xl:text-[4rem] lg:text-[3.2rem] text-[2rem] py-8">
            GET $NAUT / GET $NAUT / GET $NAUT
          </h1>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default about;
