import ticklogo from '../pages/images/tick.png'
import styles from "../styles/Infocontent.module.css"


const Infocontent = (props) => {
    return (
        <div>
          
            <div className={styles.infoMain}>

                <div>
                    <img className={styles.tickLogo}
                        src={ticklogo}
                        alt='tickLogo'
                        id='logoImg'/>
                </div>
                <div className={styles.infoHeading}>
                    <div className={styles.infoheadBig}>{props.line}
                    </div>
                    <div className={styles.infoheadSm}>{props.brief}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Infocontent;
