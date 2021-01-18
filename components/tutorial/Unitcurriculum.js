import Unitleft from "./Unitleft"
import Unitright from "./Unitright"
import styles from "../../styles/tutorial/Unitcurriculum.module.css"
import logo from "../../public/images/tutorial/rightarrow.svg"


const Unitcurriculum = ({text}) => {

    const [line1,line2,arrow] = text;

    return (
        <div className={` ${styles.tab}`}>
            <div className={`${styles.lefttab}`}>
                    <p>{line1}</p>
            </div>
            <div className={`${styles.righttab}`}>
               <div className={styles.text1}>
                    <p>{line2}</p>
               </div>
               <div className={styles.image}>
                  <img src={arrow} alt="" />
               </div>
            </div>
        </div>
    );
}

export default Unitcurriculum;