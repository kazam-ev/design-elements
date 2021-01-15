// const { default: Restaurent } = require("./containers/restaurent")
import Restaurent from "./containers/restaurent";
import styles from '../styles/Home.module.css'
import Courses from "./containers/Courses";


const Home = () => {
    return (
        <div>
            {/* <Restaurent /> */}
            <Courses />
        </div>
    );
}

export default Home