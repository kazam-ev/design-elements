import comma from '../pages/images/comma.png'

const Midbar = () => {
    return (
        <div className="mid-bar">
            <div className="comm-a">
                <img className="com-img"  src={comma} alt=""/>
            </div>
            <div>
                <p className="mid-text row">a formal written description or statement about the abilities,
                 character and qualities of a person, often given by a previous employer; a formal written statement about the quality of a product, service, etc.</p>
            </div>
            <div>
                <p className="mandi"> McKay</p>
           
                <p className="mandii">Sustainability manager, Seirra Nevada Brewing Co.</p>
            </div>
         </div>
    );
}

export default Midbar;