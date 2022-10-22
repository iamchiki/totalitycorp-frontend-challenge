import React from "react";
import styles from "./TextSetion.module.css";

const TextSetion = () => {
  return (
    <section className={styles["container"]}>
      <div className={styles["section-content"]}>
        <p>
          NO PURCHASE NECESSARY. Participating stores only. Ends 10/23/22. To
          enter and for Official Rules, visit 
          <span>
            <a href="https://www.starbucksstardays.com/#/landing">
               starbucksstardays.com
            </a>
          </span>
          .
        </p>
        <p>Entrants can receive a maximum of 2 entries per day.</p>
      </div>
      <div className={styles["section-content"]}>
        <p>
          **Excludes taxes and gratuities. At participating stores. Some
          restrictions apply. 150 Stars deposited after first qualifying
          Starbucks purchase. Flights purchased close to departure may not earn
          double Stars. Stars may not be earned on purchases of alcohol,
          Starbucks Cards and Starbucks Card reloads. For details, visit 
           <span>
            <a href="https://www.deltastarbucks.com/content/starbucks/en/terms-and-conditions.html">
               deltastarbucks.com/terms
            </a>
           </span>
        </p>
      </div>
    </section>
  );
};

export default TextSetion;
