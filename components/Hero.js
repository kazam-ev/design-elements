import styles from "../styles/Hero.module.css";
import { useState } from "react";
import Heromidtext from "./Heromidtext";

const Hero = ({ heading, subheading, imgPath }) => {
  const [mobile, setMobile] = useState(0);
  return (
    <div
      className="restaurentImg"
      style={{
        backgroundImage: imgPath,
        height: "100vh",
        width: "100% !important",
        backgroundPosition: "center",
        backgroundrepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Heromidtext heading={heading} subheading={subheading} />

      <div className={styles.restForm}>
        <div className={styles.inForm}>
          <input
            className={styles.telephoneNo}
            type="tel"
            className="no-outline"
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

export default Hero;
