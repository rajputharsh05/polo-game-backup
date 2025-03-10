import styles from "./mobileHeader.module.scss";
import img from "../../assets/Polo_Logo_Png[1] 1.png";

import switchIcon from "../../assets/switch to polo button.gif";

import { Row } from "antd";

const MobileHeader = () => {
  return (
    <div style={{ lineHeight: "0px !important" }}>
      <div className={styles.headerWrapper}>
        <img className={styles.img} src={img} alt="Center Logo" />
      </div>
      <Row style={{ marginTop: "2vh" }} justify={"center"}>
        <img onClick={() => {
            window.location.href = "https://polo.game";
          }}
          src={switchIcon}
          style={{ height: "10vh" , borderRadius:"2vh"}}
        ></img>
      </Row>
    </div>
  );
};

export default MobileHeader;
