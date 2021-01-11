import comma from '../pages/images/comma.png'
import styles from "../styles/Midbar.module.css"


const Midbar = () => {
    return (
        <div className={styles.midBar}>
            <div className={styles.commA}>
                <img className={styles.comImg}  src={comma} alt=""/>
            </div>
            <div>
               
                <p className={`row ${styles.midText}`}>a formal written description or statement about the abilities,
                 character and qualities of a person, often given by a previous employer; a formal written statement about the quality of a product, service, etc.</p>
            </div>
            <div>
                <p className={styles.mandi}> McKay</p>
           
                <p className={styles.mandii}>Sustainability manager, Seirra Nevada Brewing Co.</p>
            </div>
         </div>
    );
}

export default Midbar;