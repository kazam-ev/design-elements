import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Pictures from "../components/Pictures";
import Info from "../components/Info";
import Midbar from "../components/Midbar";

import Infodev from "../components/Infodev";
import CardList from "../components/CardList";
import Midtext from "../components/Midtext";

const heading =
  "Enhance your customer experience and increase your customer footfall";
const subheading = "Offer EV charging to your customer";
const imgPath =
  "url(" + `${require(`../public/images/imgRestaurent/Group.png`)}` + ")";

    const text=[
        "Enhanced customer experience",
        "Increase footfall",
        "Increase your earnings",
        "Create a brand for your restaurant"
    ]

  const Restaurent = () => {
  return (
    <div>
      <Navbar />
      <Hero heading={heading} subheading={subheading} imgPath={imgPath} />
      <Midtext text={"Why you should get a charging station at your restaurant?"}/>
      <Infodev text={text} />
      <Midbar />
      <CardList />
    </div>
  );
};

export default Restaurent;
