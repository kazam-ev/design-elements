import styles from "../styles/CourseCss/SimpleCard.module.css"

const SimpleCard = (props) => {

    return (
        <div className={styles.simplecard}>
            <div className={styles.image}>
                <img src={props.image} alt="image" />
            </div>
            <div className={styles.cardTitle}>
                <p>{props.title}</p>
            </div>
            <div className={styles.cardDescription}>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default SimpleCard;