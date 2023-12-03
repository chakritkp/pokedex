import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeCard } from "../hook/store/slices/cardListSlice";

import BottonBar from "../component/ButtonBar";
import MyPokedex from "../component/MyPokedex"
import "../App.css";


const Mydex = () => {
  const dispatch = useDispatch();
  const [datalist, setDatalist] = useState([]);

  useEffect(() => {
    const initialData = JSON.parse(localStorage.getItem("pokemonList")) || [];
    setDatalist(initialData);
  }, [datalist]);

  const handleRemoveCard = (event) => {
    console.log(event)
    dispatch(removeCard(event))
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
