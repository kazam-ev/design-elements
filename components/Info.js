import ticklogo from '../pages/images/tick.png'
import Infocontent from "./Infocontent"


const Info = () => {

    const content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt, consectetuer adipiscing elit";
    return (
        <div className="Row info-box">
            <div className="Col  sm-12 md-12 lg-6">
                
                <Infocontent  line={"Improve Productivity"} brief={content} />
                <Infocontent  line={"Increase employee loyalty"}  brief={content}/>
                <Infocontent  line={"Enhance your brand image"}  brief={content}/>
                <Infocontent  line={"Achive your sustanibilty goal"} brief={content}/>

            </div>
        </div>
    );
}

export default Info
