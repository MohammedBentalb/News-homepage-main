function Card({ card }) {
  return (
    <div className={`${card.grid} flex items-center gap-5 md:max-w-[400px]  `}>
      <img
        src={card.img}
        alt="news - img"
        width={150}
        height={200}
        className="h-[7.9rem] w-[6.25rem] object-fill max-[370px]:h-[11.5rem]"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-grayish-blue ">{card.number}</h1>
        <h2 className="cursor-pointer text-xl font-semibold text-dark-blue hover:text-soft-red">
          {card.title}
        </h2>
        <p className="w-[95%] text-grayish-blue">{card.desc}</p>
      </div>
    </div>
  );
}

export default Card;
