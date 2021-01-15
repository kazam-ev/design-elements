import styles from "../styles/CourseCss/Edge.module.css"
import rocket from "../public/images/rocket.svg"
import cycle from "../public/images/cycle.svg"
import earth from "../public/images/earth.svg"
import SimpleCard from "./SimpleCard"
import Midtext from "../components/Midtext"

const Edge = (props) => {

    const desc="Ivan runs Ivan on Tech - one of the most success and trusted blockchain channels on Youtube and is also an interna ."
    return (
        <div className={styles.edge}>
            <div className={styles.tutorial}>
                <Midtext text={"OUR EDGE"} />
            </div>

        <div className={`container`}>
            <div className={`row`}>
                <div className={`col-sm-6 col-md-4 ${styles.cardAlign}`}>
                    <SimpleCard description={desc} image={cycle} title={"Beginner Friendly"}/>
                </div>
                <div className={`col-sm-6 col-md-4 ${styles.cardAlign}`}>
                    <SimpleCard description={desc} image={rocket} title={"Proven Method"}/>
                </div>
                <div className={`col-sm-6 col-md-4 ${styles.cardAlign}`}>
                    <SimpleCard description={desc} image={earth} title={"Prepared for real world"}/>
                </div>
            </div>
        </div>
           
        
        </div>
    );
}

export default Edge;