const Infocontent = (props) => {
    return (
        <div>
            <div className="info-main">

                <div className="info-img">
                    <img className="tickLogo"
                        src='/images/tick.png'
                        alt='tickLogo'
                        id='logoImg'/>
                </div>
                <div className="info-heading">
                    <div className="info-head-big">{props.line}
                    </div>
                    <div className="info-head-sm">{props.brief}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Infocontent;
