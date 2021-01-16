import styles from "../../styles/House/Herohouse.module.css"
import {useState} from 'react'
import Heromidtext from "../Heromidtext";

const Herohouse = () => {

    const heading  = "Electric Vehicle Charging Station for House";
    const subheading  = "Use Kazam IOT based smart charger to safeguard your electric car or bike battery against any voltage surge. ";

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

export default Herohouse;