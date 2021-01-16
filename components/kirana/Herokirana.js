import styles from "../../styles/kiranashop/kirana.module.css"
import {useState} from 'react'
import Heromidtext from "../Heromidtext";

const Herokirana = () => {

    const heading  = "Electric Vehicle Charging Station for Kirana Shop";
    const subheading  = "Make side income from the ideal parking spot in front of your shop / kirana store";

    const [mobile ,setMobile] = useState(0);

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

export default Herokirana;