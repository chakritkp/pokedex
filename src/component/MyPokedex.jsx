import React, { useState, useEffect } from "react";
import iconhHappiness from "../assets/cute.png";

const MyPokedex = ({ id, img, name, hp, str, weak, happiness, handleRemoveCard }) => {


  const icons = Array.from({ length: happiness }).map(
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
      <div className="h-full m-5" key={id}>
        <img className="w-fit" src={img} alt={img} />
      </div>
      <div className="flex flex-col justify-around w-4/6 h-[200px]">
        <h3 className="text-xl font-thin uppercase">{name}</h3>

        <div className="flex justify-start mr-3">
          <p className="text-base font-bold w-16">HP</p>
          <div className="flex relative w-full">
            <span
              className="levelTubelValue h-full rounded-full absolute z-10"
              style={{ width: `${hp}%` }}
            ></span>
            <span className="levelTube w-[100%] h-full rounded-full absolute z-1"></span>
          </div>
        </div>

        <div className="flex justify-start mr-3">
          <p className="text-base font-bold w-16">STR</p>
          <div className="flex relative w-full">
            <span
              className="levelTubelValue h-full rounded-full absolute z-10"
              style={{ width: `${str}%` }}
            ></span>
            <span className="levelTube w-[100%] h-full rounded-full absolute z-1"></span>
          </div>
        </div>

        <div className="flex justify-start mr-3">
          <p className="text-base font-bold w-16">WEAK</p>
          <div className="flex relative w-full">
            <span
              className="levelTubelValue h-full rounded-full absolute z-10"
              style={{ width: `${weak}%` }}
            ></span>
            <span className="levelTube w-[100%] h-full rounded-full absolute z-1"></span>
          </div>
        </div>

        <div className="flex gap-1 w-10 h-3">{icons}</div>
      </div>
      <div className="w-1/6 h-full flex justify-end items-start">
        <button
          className="addBtn m-3 font-black text-lg"
            onClick={(e) => handleRemoveCard(id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default MyPokedex;
