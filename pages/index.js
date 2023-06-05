import Head from "next/head";
import homePage from "./homePage";
import HomePage from "./homePage";
const style = {
  main_margin: "2xl:mx-40 lg:mx-32 md:mx-10 mx-3",
  border_x: "border border-y-0",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Astronaut</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/header.svg" />
      </Head>

      <div className="container mx-auto ">
        {/* <div className={`${style.main_margin} ${style.border_x}`}> */}
        {/*------------------ section 1 homepage */}
        <HomePage />
      </div>
      {/* </div> */}
    </>
  );
}