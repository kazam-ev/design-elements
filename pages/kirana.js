const { default: Hero } = require("../components/Hero")
import Navbar from "../components/Navbar";


const Kirana = () => {


    const heading =
    "Electric Vehicle Charging Station for Kirana Shop";
    const subheading = "Make side income from the ideal parking spot in front of your shop / kirana store";
    const imgPath =
    "url(" + `${require(`../public/images/kiranashop/kirana.png`)}` + ")";


    return (
        <div>
           <Navbar />
           <Hero heading={heading} subheading={subheading} imgPath={imgPath} />
        </div>
    );
}

export default Kirana;