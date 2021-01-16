import Hero from "../components/Hero";

const heading = "Electric Vehicle Charging Station for House";
const subheading =
  "Use Kazam IOT based smart charger to safeguard your electric car or bike battery against any voltage surge. ";
const imgPath = "url(" + `${require(`../public/images/House/House.png`)}` + ")";
const House = () => {
  return (
    <div>
      <Hero heading={heading} subheading={subheading} imgPath={imgPath} />
    </div>
  );
};

export default House;
