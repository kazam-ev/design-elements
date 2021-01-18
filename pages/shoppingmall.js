const { default: Hero } = require("../components/Hero")
import Infodev from "../components/Infodev";
import Midtext from "../components/Midtext";
import Navbar from "../components/Navbar";


const Shoppingmall = () => {


    const heading =
    "Electric Vehicle Charging Station for Shopping Malls";
    const subheading = "Enhance your customer’s experience by offering them charging for their electric bikes, electric scooters and electric cars using Kazam Charging Station";
    const imgPath =
    "url(" + `${require(`../public/images/imgMall/Mall.png`)}` + ")";

    const text=[
        "Enhanced customer experience",
        "Increase footfall into your shopping mall",
        "Customers spend more time in your mall",
        "Create a brand for your mall"
    ]

    return (
        <div>
           <Navbar />
           <Hero heading={heading} subheading={subheading} imgPath={imgPath} />
           <Midtext text={"Why should get a charging station at your shopping mall?"}/>
           <Infodev text={text} />
        </div>
    );
}

export default Shoppingmall;