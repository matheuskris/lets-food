import Banner from "../src/components/Banner";
import HowSection from "../src/components/HowSection";
import Navigation from "../src/components/Navigation";
import OurMenu from "../src/components/OurMenu";
import Testimonials from "../src/components/Testimonials";
import BoxDiscount from "../src/components/BoxDiscount";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Banner />
      <HowSection />
      <OurMenu />
      <Testimonials />
      <BoxDiscount />
      <Footer />
    </div>
  );
}
