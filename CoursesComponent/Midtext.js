import styles from "../styles/CourseCss/SimpleCard.module.css"

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