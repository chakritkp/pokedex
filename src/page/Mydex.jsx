import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardListSelector, removeCard } from "../hook/store/slices/cardListSlice";

import BottonBar from "../component/ButtonBar";
import MyPokedex from "../component/MyPokedex"
import "../App.css";


const Mydex = () => {
  const dispatch = useDispatch();
  const [datalist, setDatalist] = useState([]);
  const cardList = useSelector(cardListSelector);

  useEffect(() => {
    const initialData = JSON.parse(localStorage.getItem("pokemonList")) || [];
    setDatalist(initialData);
  }, [cardList]);

  const handleRemoveCard = (event) => {
    dispatch(removeCard(event))
    setDatalist(JSON.parse(localStorage.getItem("pokemonList")) || []);
  }

  return (
    <BottonBar>
        {datalist.map((card) => (
          <MyPokedex
            key={card.id}
            id={card.id}
            img={card.img}
            name={card.name}
            hp={card.hp}
            str={card.str}
            weak={card.weak}
            happiness={card.happiness}
            handleRemoveCard={handleRemoveCard}
          />
        ))}
    </BottonBar>
  );
};

export default Mydex;
