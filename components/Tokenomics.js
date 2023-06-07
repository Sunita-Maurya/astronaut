import React, { useState } from "react";
import Image from "next/image";

import Progressbar from "./Progressbar";

const progressbar = [
  {
    label: "Presale",
    progress: "50",
  },
  {
    label: "Liquidity",
    progress: "20",
  },
  {
    label: "Reserves",
    progress: "15",
  },
  {
    label: "CEX/Staking",
    progress: "15",
  },
];

const Tokenmonics = () => {
  const [progress, setProgress] = useState(progressbar);

  return (
    <div id="tokenmonics" className="py-5 border border-x-0 border-b-0">
      <h1 className="text-center">/ Tokenomics /</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center md:px-14 px-5">
        <Image
          src="/assets/images/Token.svg"
          height="500"
          width="500"
          alt="tokenmonics"
          className="w-auto h-auto"
        />
        <div className="">
          {progress.map((value) => {
            return (
              <div
                key={value.label}
                className="flex items-center justify-between my-2"
              >
                <p className=" lg:text-xl text-sm">{value.label}</p>
                <Progressbar progress={value.progress} height={25} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tokenmonics;
