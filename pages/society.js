const { default: Hero } = require("../components/Hero")
import Navbar from "../components/Navbar";


const Society = () => {


    const heading =
    "Electric Vehicle Charging Station for Residential Society";
    const subheading = "Use Kazam charger for your society and apartments  so that EV owners can charge without any hassle and units consumed can be tracked per user  ";
    const imgPath =
    "url(" + `${require(`../public/images/residentSociety/resident.png`)}` + ")";


    return (
        <div>
           <Navbar />

           <Hero heading={heading} subheading={subheading} imgPath={imgPath} />
        </div>
    );
}

export default Society;