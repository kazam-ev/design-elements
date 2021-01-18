import styles from "../styles/smallheading.module.css"

const Smallheading = ({text}) => {
    return (
        <div>
            <div>
                <div className={`${styles.courseheading}`}>{text}</div>
            </div>
        </div>
    );
}

export default Smallheading;