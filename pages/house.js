const { default: Hero } = require("../components/Hero")
import Navbar from "../components/Navbar";


const House = () => {


    const heading =
    "Electric Vehicle Charging Station for House";
    const subheading = "Use Kazam IOT based smart charger to safeguard your electric car or bike battery against any voltage surge.";
    const imgPath =
    "url(" + `${require(`../public/images/House/House.png`)}` + ")";


    return (
        <div>
           <Navbar />

           <Hero heading={heading} subheading={subheading} imgPath={imgPath} />
        </div>
    );
}

export default House;