import styles from "../styles/Card.module.css"

const Card = (props) => {
    return (
        <div>
            <div>
                <section id={styles.facilities}>
                    <div >
                                <div className={styles.cd}>
                                    <div className={styles.Cardtextcenter}>
                                        <img src={props.imgUrl} class={`card-img-top`} />
                                        <div className={styles.cardBody}>
                                            <h5 className={`card-title`}>{props.cardTitle}</h5>
                                            <p className={`card-text`}>
                                                {props.cardText}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Card;
