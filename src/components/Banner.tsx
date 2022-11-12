export default function Banner() {
  return (
    <div className="pt-navHeight">
      <div className="bg-light px-wrapper flex flex-col justify-between lg:flex-row lg:px-bigWrapper">
        <div className="md:w-[30rem]">
          <h1 className="text-5xl font-readex pt-[160px] leading-[60px] font-semibold">
            Be The Fastest In Deliver Your{" "}
            <span className="text-primary">Food</span>
          </h1>
          <p className="my-5 text-text-light font-normal text-[18px]">
            Order your launch now and receive it home in less than 20 min or
            your money back!
          </p>
          <button className="btn mb-10">Get Started</button>
          <div className="-translate-x-wrapper lg:-translate-x-bigWrapper">
            <img src="/banner-wave.svg" alt="desenho abstrato de ondinhas" />
          </div>
          <div className="-translate-x-wrapper lg:-translate-x-bigWrapper mb-10">
            <img src="/banner-wave.svg" alt="desenho abstrato de ondinhas" />
          </div>
        </div>
        <div className="relative">
          <div className="ml-8">
            <img
              src="/banner-dishes.png"
              alt="3 pratos de comida bem saborosos"
            />
          </div>
          <div className="absolute top-0 left-minusWrapper">
            <img src="/shapes.svg" alt="esferas de composição de imagem" />
          </div>
        </div>
      </div>
    </div>
  );
}
