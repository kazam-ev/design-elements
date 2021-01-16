import restaurent from "../public/images/imgRestaurent/Group.png"
import styles from "../styles/Hero.module.css"
import {useState} from 'react'
import Heromidtext from "./Heromidtext";

const Hero = () => {

    const [mobile ,setMobile] = useState(0);

    const heading = "Enhance your customer experience and increase your customer footfall";
    const subheading = "Offer EV charging to your customer";

    return (
        <div className={styles.restaurentImg} >
          
           <Heromidtext heading={heading} 
                        subheading={subheading}/>
         
           <div className={styles.rest}>
            <div  className={styles.form}>
                        <input 
                            className={styles.telephone}
                            type="tel"
                            class="no-outline"
                            placeholder="Enter mobile number"
                            onChange={async (e) => {
                                const {value} = e.currentTarget
                               
                            }}
                        />

                            <button type="button" className={`btn btn-danger btn-lg btn-md`}>Get a callback</button>
            </div>
           </div>
        </div>
    );
}

export default Hero;