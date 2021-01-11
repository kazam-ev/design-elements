import restaurent from "../pages/images/Group.png"
import styles from "../styles/Hero.module.css"
import {useState} from 'react'

const Hero = () => {

    const [mobile ,setMobile] = useState(0);

    return (
        <div className={styles.restaurentImg} >
           {/* <div className={`row ${styles.restaurentImg}`}>
                        className={`btn btn-danger btn-lg btn-md`}
           </div> */}
           <div className={styles.midtext}>
                <h1 >Enhance your customer experience and
                    increase your customer footfall
                    <span><p className={styles.midtextsm}>Offer EV charging to your customer</p></span>
                </h1> 
           </div>
         
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