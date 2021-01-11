import logo from "../pages/images/kazam.png"
import styles from "../styles/Navbar.module.css"


const Navbar = () => {

    return (
        <div>
            <div className={styles.navbar}>

                <div className={styles.kazam }>
                    <img src={logo}
                        alt="kazam"/>
                </div>
                <div  className={styles.tabs }>
                    
                            <div className={styles.text}><a>Product</a></div>
                        
                            <div className={styles.button}>
                                <a><p className={styles.text2}>Book Charging Station</p></a>
                            </div>
                </div>
                

            </div>

        </div>
    );
}

export default Navbar;
