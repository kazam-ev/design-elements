import styles from "../../styles/CourseCss/Hero.module.css"
import logo from "../../public/images/videoPlay.svg"


const Hero = () => {
    return (
        <div>
            <div className={`row ${styles.hero}`}>
                <div className={`col-md-7  ${styles.text}`}>
                    <div className={styles.para}>
                        <p className={`row ${styles.smHeading}`}>Best education suit for Electric Vehicle Industry</p>
                        <h3 className={`row ${styles.bgHeading}`}>EV EVSE Bussiness Management Courses for Enterpreneurs</h3>
                    </div>
                    
                    <div>
                        <button type="button" className={`btn btn-danger btn-lg ${styles.btn}`}><p className={styles.btnText}>Enroll Now</p></button>
                    </div>
                    
                </div>


                <div className={`col-md-5  ${styles.videoSection}`}>
                    <div className={styles.video}>
                        <div className={styles.playimg}>
                            <img src={logo} alt="playlogo" />
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Hero;