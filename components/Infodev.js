import Pictures from "./Pictures";
import Info from "./Info";
import Midtext from "./Midtext";

const Infodev = () => {
    return (
        <>
            {/* <div className="banner-info Row">
                <div className="Col md-12 sm-12 lg-12 bn-info">
                    MORE EV DRIVER ARE EXPECTING TO CHARGE AT WORK
                </div>
            </div> */}

            <div>
                <Midtext text={"MORE EV DRIVER ARE EXPECTING TO CHARGE AT WORK"} />
            </div>

            <div className='Row boxx  '>

                <div className="Col-6 lg-6 sm-12 md-6  upbox pictures">
                    <div >
                        <Pictures/>
                    </div>
                </div>

                <div className="Col-6 lg-6 sm-12 md-6">
                    <div className="Container">
                        <Info/>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Infodev;
