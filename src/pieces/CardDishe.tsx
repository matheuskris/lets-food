type CardDisheProps = {
  dishe: { name: string; description: string; price: number; imgUrl: string };
};

export default function CardDishe({ dishe }: CardDisheProps) {
  const { name, description, price, imgUrl } = dishe;
  return (
    <div className="relative flex flex-col items-center bg-custom-gray shadow-2xl w-[280px] rounded-xl">
      <img src={imgUrl} alt="" />
      <div className="w-full mt-4 relative z-10 px-6 pb-3 flex flex-col items-center">
        <h4 className="font-medium text-xl">{name}</h4>
        <p className="text-text-light text-lg">{description}</p>
        <div className="flex flex-row justify-between w-full mt-1">
          <span className="font-semibold">$ {price}</span>
          <span>
            <img src="/Vector.svg" alt={description} />
          </span>
        </div>
      </div>
      <img className="absolute bottom-0" src="/card-text-shape.svg" alt="" />
    </div>
  );
}
