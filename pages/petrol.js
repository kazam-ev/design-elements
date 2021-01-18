const { default: Hero } = require("../components/Hero")
import Infodev from "../components/Infodev";
import Midtext from "../components/Midtext";
import Navbar from "../components/Navbar";


const Petrol = () => {


    const heading =
    "Electric Vehicle Charging Station for Petrol Pumps";
    const subheading = "Serve both petrol/diesel customers and electric vehicle customers at the same time";
    const imgPath =
    "url(" + `${require(`../public/images/Petrolpumps/PetrolPump.png`)}` + ")";

    const text=[
        "Enhanced customer experience",
        "Increase footfall",
        "Increase your earnings",
        "Use your empty space"
    ]

    return (
        <div>
           <Navbar />
           <Hero heading={heading} subheading={subheading} imgPath={imgPath} />
           <Midtext text={"Why should get a charging station at your petrol pump?"}/>
           <Infodev text={text} />
        </div>
    );
}

export default Petrol;