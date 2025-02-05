import styles from "./mobileHeader.module.scss";
import img from "../../assets/Polo_Logo_Png[1] 1.png";

import { Button, Row } from "antd";

const MobileHeader = () => {
  return (
    <div style={{ lineHeight: "0px !important" }}>
      <div className={styles.headerWrapper}>
        <img className={styles.img} src={img} alt="Center Logo" />
      </div>
      <Row style={{ marginTop: "2vh" }} justify={"center"}>
        <Button
          onClick={() => {
            window.location.href = "https://polo.game";
          }}
          style={{
            fontFamily: "Popins",
            color: "white",
            fontSize: "16px",
            fontWeight: "400",
            backgroundColor: "#940101",
            borderRadius: "2dvh",
          }}
        >
          Switch to Polo Game
        </Button>
      </Row>
    </div>
  );
};

export default MobileHeader;
