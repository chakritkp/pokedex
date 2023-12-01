// MyPokedex.jsx
import React, { useState, useEffect } from "react";
import iconhHappiness from "../../public/assets/cute.png";

const MyPokedex = ({ id, img, name, hp, str, weak, damege, happiness, handleRemoveCard }) => {
  const [levelValue, setLevelValue] = useState({
    id: id,
    name: name,
    img: img,
    hpValue: hp,
    strValue: str,
    weakValue: weak,
    damageValue: damege,
    happinessValue: happiness,
  });

  const icons = Array.from({ length: levelValue.happinessValue }).map(
    (_, index) => (
      <img
        key={index}
        className="w-10 h-10 pb-2"
        src={iconhHappiness}
        alt="{iconhHappiness}"
      />
    )
  );

  return (
    <div
      className="card w-[45%] h-[250px] flex justify-between items-center"
      // key={index}
    >
      <div className="h-full m-5" key={levelValue.id}>
        <img className="w-fit" src={levelValue.img} alt={levelValue.img} />
      </div>
      <div className="flex flex-col justify-around w-4/6 h-[200px]">
        <h3 className="text-xl font-thin uppercase">{levelValue.name}</h3>

        <div className="flex justify-start mr-3">
          <p className="text-base font-bold w-16">HP</p>
          <div className="flex relative w-full">
            <span
              className="levelTubelValue h-full rounded-full absolute z-10"
              style={{ width: `${levelValue.hpValue}%` }}
            ></span>
            <span className="levelTube w-[100%] h-full rounded-full absolute z-1"></span>
          </div>
        </div>

        <div className="flex justify-start mr-3">
          <p className="text-base font-bold w-16">STR</p>
          <div className="flex relative w-full">
            <span
              className="levelTubelValue h-full rounded-full absolute z-10"
              style={{ width: `${levelValue.strValue}%` }}
            ></span>
            <span className="levelTube w-[100%] h-full rounded-full absolute z-1"></span>
          </div>
        </div>

        <div className="flex justify-start mr-3">
          <p className="text-base font-bold w-16">WEAK</p>
          <div className="flex relative w-full">
            <span
              className="levelTubelValue h-full rounded-full absolute z-10"
              style={{ width: `${levelValue.weakValue}%` }}
            ></span>
            <span className="levelTube w-[100%] h-full rounded-full absolute z-1"></span>
          </div>
        </div>

        <div className="flex gap-1 w-10 h-3">{icons}</div>
      </div>
      <div className="w-1/6 h-full flex justify-end items-start">
        <button
          className="addBtn m-3 font-black text-lg"
            onClick={() => handleRemoveCard(levelValue.id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default MyPokedex;
