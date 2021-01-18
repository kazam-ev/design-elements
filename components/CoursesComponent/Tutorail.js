import styles from "../../styles/CourseCss/Tutorial.module.css"
import lecture from "../../public/images/lecture.png"
import Card from "./Card"
import Midtext from "../Midtext"

const Tutorail = () => {


    const desc = "How much does it cost for setting up a public charging station"
    return (
        <div className={styles.tutorial}>
             <div className={styles.tutorial}>
                <Midtext text={"TUTORIAL"} />
            </div>

            <div className={`row ${styles.cardVideo}`}>
                
                <div className={styles.container}>
                    <div className={`row `}>
                        <div className={`col-sm col-md col-lg`}>
                            <Card description={desc} image={lecture} />
                        </div>
                        <div className={`col-sm col-md col-lg`}>
                            <Card description={desc} image={lecture} />
                        </div>
                        <div className={`col-sm col-md col-lg`}>
                            <Card description={desc} image={lecture} />
                        </div>
                    </div>
                </div>

            </div>

        <div className={styles.lines}>
            <div className={styles.line1}></div>
            <div ><a className={styles.view}>View_all</a></div>
            <div className={styles.line2}></div>
        </div>
            
        </div>
    );
}

export default Tutorail;