import Banner from "../src/components/Banner";
import HowSection from "../src/components/HowSection";
import Navigation from "../src/components/Navigation";
import OurMenu from "../src/components/OurMenu";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Banner />
      <HowSection />
      <OurMenu />
    </div>
  );
}
