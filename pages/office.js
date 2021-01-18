const { default: Hero } = require("../components/Hero")
import Infodev from "../components/Infodev";
import Midtext from "../components/Midtext";
import Navbar from "../components/Navbar";


const Office = () => {


    const heading =
    "Electric Vehicle Charging Station for your office";
    const subheading = "Let your employees charge their electric car, electric bikes and electric scooters in your office parking space";
    const imgPath =
    "url(" + `${require(`../public/images/office/office.png`)}` + ")";

    const text=[
        "Enhanced employee happiness",
        "Reduce your carbon footprint",
        "Become an eco-friendly employer",
        "Use your charging stations for advertising"
    ]

    return (
        <div>
           <Navbar />
           <Hero heading={heading} subheading={subheading} imgPath={imgPath} />
           <Midtext text={"Why you should get a charging station at your office?"}/>
           <Infodev  text={text}/>
        </div>
    );
}

export default Office;