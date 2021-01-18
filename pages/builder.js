const { default: Hero } = require("../components/Hero")
import Infodev from "../components/Infodev";
import Navbar from "../components/Navbar";
import Midtext from "../components/Midtext"

const Buildler = () => {


    const heading =
    "Electric Vehicle Charging Station for Project";
    const subheading = "Provide the best EV charging solution for your potential home buyers";
    const imgPath =
    "url(" + `${require(`../public/images/Builders/Buildings.png`)}` + ")";

    const text=[
        "Follow government norms",
        "Increase offering to customers",
        "Enhance your brand value",
        "Use our affordable chargers"
    ]


    return (
        <div>
           <Navbar />
           <Hero heading={heading} subheading={subheading} imgPath={imgPath} />
           <Midtext text={"Why you should get a charging station at your Buildings ?"} />
           <Infodev text={text} />

        </div>
    );
}

export default Buildler;