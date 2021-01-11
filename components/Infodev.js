import Pictures from "./Pictures";
import Info from "./Info";
import Midtext from "./Midtext";
import styles from "../styles/Infodev.module.css"


const Infodev = () => {
    return (
        <>
                <div>
                    <Midtext text={"MORE EV DRIVER ARE EXPECTING TO CHARGE AT WORK"} />
                </div>

                <div className={`Row ${styles.boxx}`}>

                <div className={`Col-6 lg-6 sm-12 md-6`}>
                    <div>
                        <Pictures/>
                    </div>
                </div>

                <div className={`Col-6 lg-6 sm-12 md-6`}>
                    <div className={`Container`}>
                        <Info/>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Infodev;
