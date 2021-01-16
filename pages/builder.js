const { default: Hero } = require("../components/Hero")
import Navbar from "../components/Navbar";


const Buildler = () => {


    const heading =
    "Electric Vehicle Charging Station for Project";
    const subheading = "Provide the best EV charging solution for your potential home buyers";
    const imgPath =
    "url(" + `${require(`../public/images/Builders/Buildings.png`)}` + ")";


    return (
        <div>
           <Navbar />

           <Hero heading={heading} subheading={subheading} imgPath={imgPath} />
        </div>
    );
}

export default Buildler;