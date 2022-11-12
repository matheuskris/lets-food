import CardDishe from "../pieces/CardDishe";

const dishes = [
  {
    name: "Mie Ramen",
    description: "Lorem ipsum",
    price: 20.2,
    imgUrl: "/card-img-1.png",
  },
  {
    name: "Salad Tahu",
    description: "Lorem ipsum",
    price: 14.4,
    imgUrl: "/card-dishe-2.png",
  },
  {
    name: "Roti Bakar",
    description: "Lorem ipsum",
    price: 10,
    imgUrl: "/card-dishe-3.png",
  },
  {
    name: "Spaghetti",
    description: "Lorem ipsum",
    price: 17.7,
    imgUrl: "/card-dishe-4.png",
  },
];

export default function OurMenu() {
  return (
    <div className=" flex flex-col items-center px-wrapper py-20">
      <div className="flex flex-col items-center max-w-sm">
        <h4 className="text-primary text-2xl font-medium ">Our Menu</h4>
        <h3 className="text-custom-black text-3xl font-bold">
          Our Popular Menu
        </h3>
        <p className="text-text-light font-medium font-2xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, cumque
          alias ad iure consectetur ea
        </p>
      </div>
      <div className="mt-4 flex flex-col gap-4 lg:flex-row">
        {dishes.map((dishe, i) => {
          return <CardDishe key={i} dishe={dishe} />;
        })}
      </div>
    </div>
  );
}
