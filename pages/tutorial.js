const { default: Hero } = require("../components/Hero")
import Infodev from "../components/Infodev";
import Midtext from "../components/Midtext";
import Navbar from "../components/Navbar";
import Smallheading from "../components/Smallheading";
import Course from "../components/Smallheading";
import Unitcurriculum from "../components/tutorial/Unitcurriculum"
import rightarrow from "../public/images/tutorial/rightarrow.svg"

const House = () => {


    const heading =
    "EV EVSE Business Management Course for Entrepreneurs";
    const subheading = "Use Kazam IOT based smart charger to safeguard your electric car or bike battery against any voltage surge.";
    const imgPath =
    "url(" + `${require(`../public/images/tutorial/studyboy.jpg`)}` + ")";
    


    const text=[
        "Choose from future course",
        "Learn from industry expert",
        "Learn from industry expert",
        "Monitor electricity consumption "]  

    const line =[
        "Unit BEE",
        "Li ion cell parameter",
        rightarrow
    ]    


    return (
        <div>
           <Navbar />
           <Hero heading={heading} subheading={subheading} imgPath={imgPath} />
           <Midtext text={"WHY SHOULD YOU ENROLL"}/>
           <Infodev text={text}/>
           <Midtext text={"CURRICULUM"} />
           <Smallheading text={"One month course syllabus"} />
           <Unitcurriculum  text={line} />
           <Unitcurriculum  text={line} />
           <Unitcurriculum  text={line} />
        </div>
    );
}

export default House;