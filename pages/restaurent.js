import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Pictures from "../components/Pictures";
import Info from "../components/Info";
import Midbar from "../components/Midbar";

import Infodev from "../components/Infodev";
import CardList from "../components/CardList";

const heading =
  "Enhance your customer experience and increase your customer footfall";
const subheading = "Offer EV charging to your customer";
const imgPath =
  "url(" + `${require(`../public/images/imgRestaurent/Group.png`)}` + ")";

const Restaurent = () => {
  return (
    <div>
      <Navbar />
      <Hero heading={heading} subheading={subheading} imgPath={imgPath} />
      <Infodev />
      <Midbar />
      <CardList />
    </div>
  );
};

export default Restaurent;
