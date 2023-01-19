export default function Footer() {
  return (
    <div className="flex flex-col bg-light mt-8">
      <div className="flex flex-col px-bigWrapper lg:flex-row justify-between items-center lg:items-start py-10">
        <div className="max-w-sm flex flex-col">
          <div>
            <img src="/logo.svg" alt="Logo Let's food" />
          </div>
          <p className="text-text-light text-xl">
            Criado por Matheus Krisciumas
          </p>
          <ul className="flex flex-row">
            <li>
              <a href="linkedin.com/in/matheuskris" target="_bla">
                <img src="/instagram.svg" alt="instagram" />
              </a>
            </li>
            <li>
              <a href="linkedin.com/in/matheuskris" target="_bla">
                <img src="/facebook.svg" alt="facebook" />
              </a>
            </li>
            <li>
              <a href="linkedin.com/in/matheuskris" target="_bla">
                <img src="/twitter.svg" alt="twitter" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className="font-medium text-xl">Company</h4>
          <span className="text-text-light text-xl">About us</span>
          <span className="text-text-light text-xl">Career</span>
          <span className="text-text-light text-xl">How It Work</span>
        </div>
        <div className="flex flex-col">
          <h4 className="font-medium text-xl">Policy</h4>
          <span className="text-text-light text-xl">FAQ</span>
          <span className="text-text-light text-xl">Privacy</span>
          <span className="text-text-light text-xl">Shipping</span>
        </div>
        <div className="flex flex-col">
          <h4 className="font-medium text-xl">Get in Touch</h4>
          <span className="text-text-light text-xl">999283838</span>
          <span className="text-text-light text-xl">food@example.com</span>
        </div>
      </div>
      <div className="h-0 w-[70%] mx-auto border-solid border border-custom-gray" />
      <div className="py-10 flex justify-center items-center">
        &copy;2023 Let&apos;sFood. ALL RIGHT RESERVED.
      </div>
    </div>
  );
}
