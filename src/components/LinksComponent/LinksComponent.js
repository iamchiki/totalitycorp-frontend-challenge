import React from "react";
import styles from "./LinksComponent.module.css";

const LinksComponent = ({ linkContent }) => {
  const { heading, links } = linkContent;
  return (
    <div className={styles["link-container"]}>
      <h3>{heading}</h3>
      <ul className={styles["links"]}>
        {links.map((link) => {
          return (
            <li>
              <a href={link.url}>{link.text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LinksComponent;
