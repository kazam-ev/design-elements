const { default: Hero } = require("../components/Hero")
import Infodev from "../components/Infodev";
import Midtext from "../components/Midtext";
import Navbar from "../components/Navbar";


const Society = () => {


    const heading =
    "Electric Vehicle Charging Station for Residential Society";
    const subheading = "Use Kazam charger for your society and apartments  so that EV owners can charge without any hassle and units consumed can be tracked per user  ";
    const imgPath =
    "url(" + `${require(`../public/images/residentSociety/resident.png`)}` + ")";

    const text=[
        "No need to extend connection from meters",
        "Track usage per user and charge accordingly",
        "Battery safety",
        "Ease of installation and ease of use"
    ]

    return (
        <div>
           <Navbar />
           <Hero heading={heading} subheading={subheading} imgPath={imgPath} />
           <Midtext text={"Why you should get a charging station in your society?"} />
           <Infodev text={text} />
        </div>
    );
}

export default Society;