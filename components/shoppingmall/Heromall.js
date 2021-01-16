// import restaurent from "../public/images/imgRestaurent/Group.png"
import styles from "../../styles/shoppingmall/Heromall.module.css";
import { useState } from "react";
import Heromidtext from "../Heromidtext";

const Heromall = () => {
  const heading = "Electric Vehicle Charging Station for Restaurants";
  const subheading =
    "Enhance your customer’s experience by offering them charging for their electric bikes, electric scooters and electric cars using Kazam Charging Station ";

  const [mobile, setMobile] = useState(0);

  return (
    <div className={styles.restaurentImg}>
      <Heromidtext heading={heading} subheading={subheading} />

      <div className={styles.rest}>
        <div className={styles.form}>
          <input
            className={styles.telephone}
            type="tel"
            class="no-outline"
            placeholder="Enter mobile number"
            onChange={async (e) => {
              const { value } = e.currentTarget;
            }}
          />

          <button type="button" className={`btn btn-danger btn-lg btn-md`}>
            Get a callback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heromall;
