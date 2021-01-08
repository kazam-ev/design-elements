
import happy from '../pages/images/happy.png'
import greencar from '../pages/images/greencar.png'
import harvey from '../pages/images/harvey.png'

const Pictures = () => {
    return(
        <div className="banner " id="pics">
            
            
            <div className="Row boxx">
                        <div className="Col-6 md-12 sm-12 lg-6 image">

                            <div className="Row  box-info">
                                <div className="Col md-6 lg-6 ">
                                    <div className="Row smallest">
                                        <div className="Col md-12 sm-6">
                                            <img src={harvey} alt="harvey" className="harvey" />
                                        </div>
                                        <div className="Col md-12 sm-6">
                                        <img src={happy} alt="happy" className="happy" />
                                        </div>
                                    </div>
                                </div>

                                <div className="Col md-6 lg-6 ">
                                     <img src={greencar} alt="greencar" className="greencar" />
                                </div>
                            </div>
                        </div>

                      
            </div> 

        </div>
    )
}

export default Pictures;