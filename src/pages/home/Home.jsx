import Navbar from "../../components/Navbar/Nav";
import Offer from "../../components/popularProducts/Offer";
import Seller from "../../components/popularProducts/Seller";
import Slider from "../../components/Slider/SliderAuto";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      {/* <Offer /> */}
      <Seller />
    </>
  );
};
export default Home;
