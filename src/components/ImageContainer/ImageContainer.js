import React from "react";
import styles from "./ImageContainer.module.css";
import Button from "../Buttton/Button";

const ImageContainer = ({ sectionContent }) => {
  const { imgUrl, textContent, btn, reverse, center } = sectionContent;
  return (
    <section
      className={`${styles["container"]} ${reverse ? styles["reverse"] : ""}`}>
      <div className={styles["img-section"]}>
        <img src={imgUrl} alt="" className={styles["img"]} />
      </div>
      <div className={`${styles["content"]} ${styles[textContent.class]}`}>
        <div className={`${center ? styles["inner"] : ""}`}>
          <h1>{textContent.heading}</h1>
          <p>{textContent.article}</p>
          {textContent.listItems && (
            <ul>
              {textContent.listItems.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          )}
          <Button btnClass={btn.class}>{btn.children}</Button>
        </div>
      </div>
    </section>
  );
};

export default ImageContainer;
