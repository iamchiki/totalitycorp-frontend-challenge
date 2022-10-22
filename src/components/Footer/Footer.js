import React from "react";
import { linksArr, svgs } from "../../constants/constant";
import useViewport from "../../hooks/useViewport";
import Accordian from "../Accordian/Accordian";
import LinksComponent from "../LinksComponent/LinksComponent";
import styles from "./Footer.module.css";

const Footer = () => {
  const { width } = useViewport();

  return (
    <footer>
      <nav className={styles["footer-nav"]}>
        {width > 768 && (
          <div className={styles["links-section"]}>
            {linksArr.map((content) => {
              return <LinksComponent linkContent={content}></LinksComponent>;
            })}
          </div>
        )}
        {width < 768 &&
          linksArr.map((content) => {
            return <Accordian linkContent={content}></Accordian>;
          })}

        <hr className={styles["hr-line"]}></hr>
        <div>
          <ul className={styles["svg-list"]}>
            {svgs.map((svg) => {
              return (
                <li>
                  <a href={svg.url}>{svg.content}</a>
                </li>
              );
            })}
          </ul>
          <div className={styles["term-links"]}>
            <p>
              <a href="https://www.starbucks.com/terms/privacy-policy/">
                Privacy Policy
              </a>
            </p>
            <span>|</span>
            <p>
              <a href="https://www.starbucks.com/terms/starbucks-terms-of-use/">
                Terms of Use
              </a>
            </p>
            <span>|</span>
            <p>
              <a href="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70076.pdf">
                CA Supply Chain Act
              </a>
            </p>
            <span>|</span>
            <p>
              <a href="#">Cookie Preferences</a>
            </p>
          </div>
          <div>
            <p>© 2022 Starbucks Coffee Company. All rights reserved.</p>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
