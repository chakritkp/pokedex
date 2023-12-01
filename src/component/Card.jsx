import { useEffect, useState } from "react";
import iconhHappiness from "../../public/assets/cute.png";

const Card = ({ id, img, name, hp, str, weak, handleAddCard }) => {
  const [levelValue, setLevelValue] = useState({
    id: id,
    name:name,
    img:img,
    hpValue: 0,
    strValue: 0,
    weakValue: 0,
    damageValue: 0,
    happinessValue: 0,
  });

  useEffect(() => {
    const strLevel =
      Array.isArray(str) && str.length > 0
        ? str.length * 50 > 100
          ? 100
          : str.length * 50
        : 0;
    const weakLevel = Array.isArray(weak)
      ? weak.length * 100 > 100
        ? 100
        : weak.length * 100
      : 0;

    const calculateDamage = (attacks) => {
      if (!Array.isArray(attacks)) {
        return 0;
      }

      let totalDamage = 0;
      for (let i = 0; i < attacks.length; i++) {
        const damageString = attacks[i].damage;
        const numericValue = parseInt(damageString);
        const damageValue = isNaN(numericValue) ? 0 : numericValue;
        totalDamage += damageValue;
      }
      return totalDamage;
    };

    const totalDamage = calculateDamage(str);

    const HappinessLevel = Math.round(
      (levelValue.hpValue / 10 +
        levelValue.damageValue / 10 +
        10 -
        levelValue.weakValue / 100) /
        5
    );

    setLevelValue((prevState) => ({
      ...prevState,
      hpValue: hp > 100 ? 100 : hp === "None" ? 0 : parseInt(hp),
      strValue: strLevel,
      weakValue: weakLevel,
      damageValue: totalDamage,
      happinessValue: HappinessLevel,
    }));
  }, [hp, str, weak, levelValue.damageValue, levelValue.happinessValue]);

  const icons = Array.from({ length: levelValue.happinessValue }).map(
    (_, index) => (
      <img
      key={index}
      className="w-10 pb-2"
      src={iconhHappiness}
      alt="{iconhHappiness}"
    />
    )
  );

  return (
    <div
      className="card w-[95%] h-[200px] flex justify-between items-center"
      key="1"
    >
      <div className="w-1/6 m-2" key={id}>
        <img className="w-fit h-[190px]" src={img} alt={img} />
      </div>
      <div className="flex flex-col justify-around w-4/6 h-full">
        <h3 className="text-xl font-thin uppercase">{name}</h3>

        <div className="flex justify-start mr-3">
          <p className="text-base font-bold w-16">HP</p>
          <div className="flex relative w-full">
            <span
              className="levelTubelValue h-full rounded-full absolute z-10"
              style={{ width: levelValue.hpValue + "%" }}
            ></span>
            <span className="levelTube w-[100%] h-full rounded-full absolute z-1"></span>
          </div>
        </div>

        <div className="flex justify-start mr-3">
          <p className="text-base font-bold w-16">STR</p>
          <div className="flex relative w-full">
            <span
              className="levelTubelValue h-full rounded-full absolute z-10"
              style={{ width: levelValue.strValue + "%" }}
            ></span>
            <span className="levelTube w-[100%] h-full rounded-full absolute z-1"></span>
          </div>
        </div>

        <div className="flex justify-start mr-3">
          <p className="text-base font-bold w-16">WEAK</p>
          <div className="flex relative w-full">
            <span
              className="levelTubelValue h-full rounded-full absolute z-10"
              style={{ width: levelValue.weakValue + "%" }}
            ></span>
            <span className="levelTube w-[100%] h-full rounded-full absolute z-1"></span>
          </div>
        </div>

        <div className="flex gap-1">{icons}</div>
      </div>
      <div className="w-1/6 h-full flex justify-end items-start">
        <button
          className="addBtn m-3 font-black text-lg"
          onClick={() => handleAddCard(levelValue)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Card;
