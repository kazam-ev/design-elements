import happy from '../pages/images/happy.png'
import greencar from '../pages/images/greencar.png'
import harvey from '../pages/images/harvey.png'
import styles from "../styles/Pictures.module.css"

const Pictures = () => {
    return(
        <div className={styles.banner} id="pics">
            <div className={`Row ${styles.boxx}`}>
                        <div className={` Col-6 md-12 sm-12 lg-6 ${styles.image}`}>

                            <div className={`Row ${styles.boxInfo}`}>
                                <div className={`Col md-6 lg-6 `}>
                                    <div className={`Row ${styles.smallest}`}>
                                        <div className={`Col md-12 sm-6`}>
                                            <img src={harvey} alt="harvey" className={styles.harvey} />
                                        </div>
                                        <div className={`Col md-12 sm-6`}>
                                        <img src={happy} alt="happy" className={styles.happy} />
                                        </div>
                                    </div>
                                </div>

                                <div className="Col md-6 lg-6 ">
                                     <img src={greencar} alt="greencar" className={styles.greencar} />
                                </div>
                            </div>
                        </div>   
            </div> 

        </div>
    )
}

export default Pictures;