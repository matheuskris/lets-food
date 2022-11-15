type TestCardProps = {
  personTestimonial: {
    name: string;
    stars: number;
    testimonial: string;
    imgUrl: string;
  };
};

export default function TestimonialCard({ personTestimonial }: TestCardProps) {
  const { name, stars, testimonial, imgUrl } = personTestimonial;

  function getStarsArray(starsnumber: number): string[] {
    let starsArray = [];
    for (var i = 0; i < stars; i++) {
      starsArray.push("full");
    }
    if (stars % starsArray.length) {
      starsArray.pop();
      starsArray.push("half");
    }
    for (var i2 = starsArray.length; i2 < 5; i2++) {
      starsArray.push("empty");
    }
    return starsArray;
  }

  return (
    <div className="bg-custom-gray rounded-xl py-7 px-5 max-w-md shadow-xl">
      <div className="flex flex-row mb-4 gap-6">
        <img src={imgUrl} alt={`picture of ${name}`} />
        <div className="flex flex-col gap-2">
          <h4 className="font-medium text-xl">{name}</h4>
          <div className="flex flex-row gap-2">
            {getStarsArray(stars).map((star, i) => {
              if (star === "full") {
                return (
                  <img key={i} src="/fullStar.svg" alt="estrela inteira" />
                );
              }
              if (star === "half") {
                return <img key={i} src="/halfStar.svg" alt="meia estrela" />;
              }
              return <img key={i} src="/emptyStar.svg" alt="estrela vazia" />;
            })}
          </div>
        </div>
      </div>
      <div>
        <p className="text-text-light font-medium text-lg">
          &ldquo;{testimonial}&rdquo;
        </p>
      </div>
    </div>
  );
}
