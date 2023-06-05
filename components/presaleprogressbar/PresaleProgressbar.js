import React, { useState } from "react";
import s from "./PresaleProgressbar.module.css";

const PresaleProgressbar = ({}) => {
  const totalValue = 100;
  const [totalRaised, setTotalRaised] = useState(20);
  const progressPercentage = (totalRaised / totalValue) * 100;
  const progressBars = progressPercentage / 2.5;
  return (
    <div className={s.container}>
      {Array.from({ length: 40 }, (x, i) => {
        return (
          <div
            key={i}
            className={`${i <= progressBars ? s.active : ""} ${s.strip}`}
          ></div>
        );
      })}
    </div>
  );
};

export default PresaleProgressbar;
