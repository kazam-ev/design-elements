const { default: Hero } = require("../components/Hero")
import Infodev from "../components/Infodev";
import Midtext from "../components/Midtext";
import Navbar from "../components/Navbar";


const House = () => {


    const heading =
    "Electric Vehicle Charging Station for House";
    const subheading = "Use Kazam IOT based smart charger to safeguard your electric car or bike battery against any voltage surge.";
    const imgPath =
    "url(" + `${require(`../public/images/House/House.png`)}` + ")";

    const text=[
        "Protect your EV against voltage surge",
        "Switch charging while sitting on couch",
        "Contribute to nature by using EV",
        "Monitor electricity consumption "]


    return (
        <div>
           <Navbar />
           <Hero heading={heading} subheading={subheading} imgPath={imgPath} />
           <Midtext text={"Why you should get a charging station at your home?"}/>
           <Infodev text={text}/>
           <Midtext  text={"CURRICULUM"}/>
        </div>
    );
}

export default House;