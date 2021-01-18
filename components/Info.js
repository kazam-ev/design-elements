import ticklogo from '../public/images/imgRestaurent/tick.png'
import Infocontent from "./Infocontent"
import styles from "../styles/Info.module.css"

const Info = ({text}) => {

    const [line1 ,line2, line3,line4] = text;
    

    const content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt, consectetuer adipiscing elit";
    return (
        <div className={` Row ${styles.infoBox}`}>
            <div className={`Col sm-12 md-12 lg-6`}> 
                <Infocontent  line={line1} brief={content} />
                <Infocontent  line={line2}  brief={content}/>
                <Infocontent  line={line3}  brief={content}/>
                <Infocontent  line={line4} brief={content}/>
            </div>
        </div>
    );
}

export default Info
