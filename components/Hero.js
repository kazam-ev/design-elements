import restaurent from "../pages/images/Group.png"
import styles from "../styles/Hero.module.css"
import {useState} from 'react'

const Hero = () => {

    const [mobile ,setMobile] = useState(0);

    return (
        <div className={styles.restaurentImg} >
           {/* <div className={`row ${styles.restaurentImg}`}>

           </div> */}
           <div className="rest-1">
                <h1 >Enhance your customer experience and
                    increase your customer footfall
                    <span><p className="heading-2">Offer EV charging to your customer</p></span>
                </h1> 
           </div>
         
           <div className="rest-2">
            <div className="form">
                        <input 
                            className="telephone no-outline" 
                            type="tel"
                            class="no-outline"
                            placeholder="Enter mobile number"
                            onChange={async (e) => {
                                const {value} = e.currentTarget
                                // const Fuse = (await import('fuse.js')).default
                                // const fuse = new Fuse(names)
                    
                                // setResults(fuse.search(value))
                            }}
                        />

                            <button type="button" class="btn btn-danger btn-lg btn-md">Get a callback</button>
            </div>
          
           </div>
           
          
        </div>
    );
}

export default Hero;