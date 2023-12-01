import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeCard } from "../hook/store/slices/myPokedexSlice";

import BottonBar from "../component/ButtonBar";
import "../App.css";
import MyPokedex from "../component/MyPokedex";

const Mydex = () => {
  const [myCardData, setMyCardData] = useState([]);
  const dispatch = useDispatch();

  const handleRemoveCard = (cardIdToRemove) => {
    dispatch(removeCard(cardIdToRemove));

    setMyCardData((prevMyCardData) =>
      prevMyCardData.filter((card) => card.id !== cardIdToRemove)
    );

    const updatedMyCardData = myCardData.filter((card) => card.id !== cardIdToRemove);
    setMyCardData(updatedMyCardData);
    localStorage.setItem("my_card", JSON.stringify(updatedMyCardData));
    window.location.reload();
  }

  useEffect(() => {
    const myCardItemsString = window.localStorage.getItem("my_card");
    const myCard = myCardItemsString ? JSON.parse(myCardItemsString) : [];
    setMyCardData(myCard);
  }, []); 


  return (
    <BottonBar>
        {myCardData.map((card) => (
          <MyPokedex
            // key={card.id}
            id={card.id}
            img={card.img}
            name={card.name}
            hp={card.hpValue}
            str={card.strValue}
            weak={card.weakValue}
            damege={card.damageValue}
            happiness={card.happinessValue}
            handleRemoveCard={handleRemoveCard}
          />
        ))}
    </BottonBar>
  );
};

export default Mydex;
