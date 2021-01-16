const { default: Hero } = require("../components/Hero")
import Navbar from "../components/Navbar";


const Office = () => {


    const heading =
    "Electric Vehicle Charging Station for your office";
    const subheading = "Let your employees charge their electric car, electric bikes and electric scooters in your office parking space";
    const imgPath =
    "url(" + `${require(`../public/images/office/office.png`)}` + ")";


    return (
        <div>
           <Navbar />

           <Hero heading={heading} subheading={subheading} imgPath={imgPath} />
        </div>
    );
}

export default Office;