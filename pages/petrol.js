const { default: Hero } = require("../components/Hero")
import Navbar from "../components/Navbar";


const Petrol = () => {


    const heading =
    "Electric Vehicle Charging Station for Petrol Pumps";
    const subheading = "Serve both petrol/diesel customers and electric vehicle customers at the same time";
    const imgPath =
    "url(" + `${require(`../public/images/Petrolpumps/PetrolPump.png`)}` + ")";


    return (
        <div>
           <Navbar />

           <Hero heading={heading} subheading={subheading} imgPath={imgPath} />
        </div>
    );
}

export default Petrol;