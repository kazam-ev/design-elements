

// const { default: Restaurent } = require("./containers/restaurent")
import Restaurent from "./containers/restaurent";
import styles from '../styles/Home.module.css'
import Courses from "./containers/Courses";
import Shoppingmall from "./containers/Shoppingmall";
import Society from "./containers/Society";
import Kirana from "./containers/Kirana";
import House from "./containers/House";
import Builder from "./containers/Builder";
import Herooffice from "../components/office/Herooffice";
import Petrol from "./containers/Petrol";



const Home = () => {
    return (
        <div>
            {/* <Restaurent /> */}
            <Courses />
            {/* <Shoppingmall /> */}
            {/* <Society /> */}
            {/* <Kirana /> */}
            {/* <House /> */}
            {/* <Builder /> */}
            {/* <Herooffice /> */}
            {/* <Petrol /> */}
        </div>
    );
}

export default Home