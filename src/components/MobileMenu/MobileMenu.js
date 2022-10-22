import React, { useState } from "react";
import { closeSvg, menuSvg } from "../../constants/constant";
import MenuContent from "./MenuContent";
import styles from "./MobileMenu.module.css";

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(true);

  const menuHandle = () => {
    setShowMenu((prevState) => !prevState);
  };
  return (
    <>
      <div className={styles["menu-icon"]}>
        <div>
          <button onClick={menuHandle}>{showMenu ? menuSvg : closeSvg}</button>
        </div>
      </div>
      {!showMenu && <MenuContent showMenu={showMenu}></MenuContent>}
    </>
  );
};

export default MobileMenu;
