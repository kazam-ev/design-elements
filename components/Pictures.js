
const Pictures = () => {
    return(
        <div className="banner " id="pics">
            
            
            <div className="Row boxx">
                        <div className="Col-6 md-12 sm-12 lg-6 image">

                            <div className="Row  box-info">
                                <div className="Col md-6 lg-6 ">
                                    <div className="Row smallest">
                                        <div className="Col md-12 sm-6">
                                            <img src='/images/greencar.png' alt="harvey" className="harvey" />
                                        </div>
                                        <div className="Col md-12 sm-6">
                                        <img src='/images/happy.png' alt="happy" className="happy" />
                                        </div>
                                    </div>
                                </div>

                                <div className="Col md-6 lg-6 ">
                                     <img src='/images/greencar.png' alt="greencar" className="greencar" />
                                </div>
                            </div>
                        </div>

                      
            </div> 

        </div>
    )
}

export default Pictures;