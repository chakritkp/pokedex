import React, { useState } from "react";
import CardsList from "../page/CardsList";

const BottonBar = ({ children }) => {
  const [isCardsListVisible, setCardsListVisible] = useState(false);

  const toggleCardsList = () => {
    setCardsListVisible(!isCardsListVisible);
  };

  const closeCardsList = () => {
    setCardsListVisible(false);
  };
  return (
    <header className="w-full flex flex-wrap gap-3 justify-center items-center mt-16">
      <div className="btnBarTop z-30 fixed top-0 w-full mix-w-[1024px] flex justify-center items-center text-2xl h-[50px] bg-slate-500 mb-16">
        <h1>My Pokedex</h1>
      </div>
      {children}
      {isCardsListVisible && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full z-40 opacity-80 bg-black"
            onClick={closeCardsList}
          ></div>
          <CardsList onClose={closeCardsList} />
        </>
      )}
      <div className="btnBarBottom fixed flex justify-center items-end w-full mix-w-[1024px] h-[50px] bottom-0 z-30">
        <div className="btnBarBottom flex justify-center items-center w-[100px] h-[100px] rounded-full ">
          <button className="text-7xl text-white" onClick={toggleCardsList}>
            +
          </button>
        </div>
      </div>
    </header>
  );
};

export default BottonBar;
