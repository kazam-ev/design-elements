import styles from "../styles/Midtext.module.css";

const Midtext = (props) => {
    return (
        <div>
            <div>
                <h2 className={styles.resources}>{props.text}</h2>
            </div>
        </div>
    );
}

export default Midtext;