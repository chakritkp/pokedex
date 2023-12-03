import iconhHappiness from "../assets/cute.png";

const Card = ({ id, img, name, hp, str, weak, happiness, handleAddCard }) => {
  const icons = Array.from({ length: happiness }).map((_, index) => (
    <img
      key={index}
      className="w-10 pb-2"
      src={iconhHappiness}
      alt="{iconhHappiness}"
    />
  ));

  return (
    <div
      className="card w-[95%] h-[200px] flex justify-between items-center"
      key={id}
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
              style={{ width: hp + "%" }}
            ></span>
            <span className="levelTube w-[100%] h-full rounded-full absolute z-1"></span>
          </div>
        </div>

        <div className="flex justify-start mr-3">
          <p className="text-base font-bold w-16">STR</p>
          <div className="flex relative w-full">
            <span
              className="levelTubelValue h-full rounded-full absolute z-10"
              style={{ width: str + "%" }}
            ></span>
            <span className="levelTube w-[100%] h-full rounded-full absolute z-1"></span>
          </div>
        </div>

        <div className="flex justify-start mr-3">
          <p className="text-base font-bold w-16">WEAK</p>
          <div className="flex relative w-full">
            <span
              className="levelTubelValue h-full rounded-full absolute z-10"
              style={{ width: weak + "%" }}
            ></span>
            <span className="levelTube w-[100%] h-full rounded-full absolute z-1"></span>
          </div>
        </div>

        <div className="flex gap-1">{icons}</div>
      </div>
      <div className="w-1/6 h-full flex justify-end items-start">
        <button
          className="addBtn m-3 font-black text-lg"
          onClick={() =>
            handleAddCard({
              id,
              img,
              name,
              hp,
              str,
              weak,
              happiness,
              handleAddCard,
            })
          }
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Card;
