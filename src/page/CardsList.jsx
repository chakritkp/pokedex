import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, apiSelector } from "../hook/store/slices/apiSlice";
import { addCard } from "../hook/store/slices/myPokedexSlice";
import searchIcon from "../../public/assets/search.png";

import Card from "../component/card";

function CardsList() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector(apiSelector);

  const [cardData, setCardData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddCard = (cardLevelValue) => {
    dispatch(addCard(cardLevelValue));
    const myCardItemsString = window.localStorage.getItem("my_card");

    let myCard = myCardItemsString ? JSON.parse(myCardItemsString) : [];

    if (!myCard.some((userCard) => userCard.id === cardLevelValue.id)) {
      myCard.push(cardLevelValue);
      localStorage.setItem("my_card", JSON.stringify(myCard));

      setTimeout(() => {
        setCardData((prevCardData) =>
          prevCardData.filter((card) => card.id !== cardLevelValue.id)
        );
        alert("Success !");
      }, 3000);
    }
  };

  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    if (data.cards) {
      const filteredCards = data.cards.filter((card) =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCardData(filteredCards);
    }
  }, [data.cards, searchTerm]);

  useEffect(() => {
    const myCardItemsString = window.localStorage.getItem("my_card");
    const myCard = myCardItemsString ? JSON.parse(myCardItemsString) : [];

    if (!Array.isArray(myCard)) {
      console.log("Invalid my_card format");
      return;
    }
    const myCardIds = new Set(myCard.map((card) => card.id));

    if (data.cards) {
      const uniqueCards = data.cards.filter((card) => !myCardIds.has(card.id));

      setCardData(uniqueCards);
    }
  }, [data.cards]);

  return (
    <main className="absolute z-50 w-[800px] bg-white flex flex-col gap-3 py-3 justify-center items-center left-1/2 top-0 transform -translate-x-1/2 bg-transparent">
      <div className="w-full px-2">
        <input
          type="text"
          className="searchBoxBorder w-full h-[50px] p-3 text-black"
          placeholder="Find pokemon"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <img
          src={searchIcon}
          className="absolute top-3 right-3 w-[50px]"
          alt={searchIcon}
        />
      </div>
      {cardData.map((cardData) => (
        <Card
          // key={cardData.id}
          id={cardData.id}
          img={cardData.imageUrl}
          name={cardData.name}
          hp={cardData.hp}
          str={cardData.attacks}
          weak={cardData.weaknesses}
          handleAddCard={handleAddCard}
        />
      ))}
    </main>
  );
}
// }

export default CardsList;
