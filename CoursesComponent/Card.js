import styles from "../styles/CourseCss/Card.module.css"


const Card = (props) => {
    return (
        <div>
           <div className={` ${styles.card}`}>
                <div className={`col-3 ${styles.tutImg}`}>
                    <img src={props.image} alt="lecture.png"/>
                </div>
                <div className={` col-md ${styles.cardText}`}>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;