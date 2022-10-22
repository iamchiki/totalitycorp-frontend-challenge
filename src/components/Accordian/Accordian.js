import React, { useState } from "react";
import { downArrow, upArrow } from "../../constants/constant";
import styles from "./Accordian.module.css";

const Accordian = ({ linkContent }) => {
  const [open, setOpen] = useState(false);

  const { heading, links } = linkContent;
  const clickHandler = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <div className={styles["accordian-container"]}>
      <div className={styles["accordian-heading"]} onClick={clickHandler}>
        <h3>{heading}</h3>
        <div
          className={`${open ? styles["rotate"] : styles["rotate-reverse"]}`}>
          {downArrow}
        </div>
      </div>

      {open && (
        <ul className={styles["links"]}>
          {links.map((link) => {
            return (
              <li>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Accordian;
