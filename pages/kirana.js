const { default: Hero } = require("../components/Hero")
import Infodev from "../components/Infodev";
import Navbar from "../components/Navbar";
import Midtext from "../components/Midtext";



const Kirana = () => {


    const heading =
    "Electric Vehicle Charging Station for Kirana Shop";
    const subheading = "Make side income from the ideal parking spot in front of your shop / kirana store";
    const imgPath =
    "url(" + `${require(`../public/images/kiranashop/kirana.png`)}` + ")";

    const text = [
        "Extra income for you",
        "Increase footfall at your shop",
        "Sell to EV drivers as they charge",
        "Use Kazam payment gateway"
    ]

    return (
        <div>
           <Navbar />
           <Hero heading={heading} subheading={subheading} imgPath={imgPath} />
           <Midtext text={"Why should get a charging station in your Kirana shop?"}/>
           <Infodev text={text}/>
        </div>
    );
}

export default Kirana;