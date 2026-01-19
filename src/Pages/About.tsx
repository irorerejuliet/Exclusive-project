import Activity from "../Components/AboutDetails/Activity";
import Founders from "../Components/AboutDetails/Founders";
import Stories from "../Components/AboutDetails/Stories";
import DeliveryService from "../lib/Products/DeliveryService";

const About = () => {
  return (
    <>
      <Stories />
      <Activity />
      <Founders />
      <DeliveryService />
    </>
  );
};

export default About;
