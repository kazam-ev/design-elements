import styles from "../styles/heromidtext.module.css";

const Heromidtext = (props) => {
    return (
       
           <div className={styles.midtext}>
                <h1 >{props.heading}
    <span><p className={styles.midtextsm}>{props.subheading}</p></span>
                </h1> 
           </div>
       
    );
}

export default Heromidtext;