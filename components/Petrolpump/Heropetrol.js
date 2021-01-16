import styles from "../../styles/Petrol/Heropetrol.module.css";
import { useState } from "react";
import Heromidtext from "../Heromidtext";

const Heropetrol = () => {
  const heading = "Electric Vehicle Charging Station for Petrol Pumps";
  const subheading =
    "Serve both petrol/diesel customers and electric vehicle customers at the same time";

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

export default Heropetrol;
