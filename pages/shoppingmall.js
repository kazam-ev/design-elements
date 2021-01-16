const { default: Hero } = require("../components/Hero")
import Navbar from "../components/Navbar";


const Shoppingmall = () => {


    const heading =
    "Electric Vehicle Charging Station for Shopping Malls";
    const subheading = "Enhance your customer’s experience by offering them charging for their electric bikes, electric scooters and electric cars using Kazam Charging Station";
    const imgPath =
    "url(" + `${require(`../public/images/imgMall/Mall.png`)}` + ")";


    return (
        <div>
           <Navbar />
           <Hero heading={heading} subheading={subheading} imgPath={imgPath} />
        </div>
    );
}

export default Shoppingmall;