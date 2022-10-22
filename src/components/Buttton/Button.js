import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, btnClass }) => {
  return (
    <button className={`${styles["btn"]} ${styles[btnClass]}`}>
      {children}
    </button>
  );
};

export default Button;
