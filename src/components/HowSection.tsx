export default function HowSection() {
  return (
    <div className=" flex flex-col items-center px-wrapper pt-20">
      <div className="flex flex-col items-center max-w-sm">
        <h4 className="text-primary text-2xl font-medium ">How it works</h4>
        <h3 className="text-custom-black text-3xl font-bold">What We Serve</h3>
        <p className="text-text-light font-medium font-2xl text-center">
          Product Quality Is Our Priority, and Always Guarantees Halal and
          Safety Until It Is In Your Hands
        </p>
      </div>
      <div className="flex flex-col items-center py-12 gap-10 lg:flex-row lg:justify-center lg:gap-20">
        <div className="flex flex-col justify-center items-center">
          <img src="/order-1.png" alt="desenho de mão segurando um celular" />
          <h3 className="text-custom-black text-3xl font-semibold">
            Easy To Order
          </h3>
          <p className="text-text-light font-medium font-2xl">
            You only order through the app
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/delivery-1.png" alt="desenho de motoboy" />
          <h3 className="text-custom-black text-3xl font-semibold">
            Fastest Delivery
          </h3>
          <p className="text-text-light font-medium font-2xl">
            Delivery will be on time
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src="/courier-1.png"
            alt="desenho de engenheiro de qualidade aprovando o produto"
          />
          <h3 className="text-custom-black text-3xl font-semibold">
            Best Quality
          </h3>
          <p className="text-text-light font-medium font-2xl">
            The best quality of food for you
          </p>
        </div>
      </div>
    </div>
  );
}
