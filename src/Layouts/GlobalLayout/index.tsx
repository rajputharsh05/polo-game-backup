import { Layout } from "antd";
import { useLocation, useOutlet } from "react-router-dom";
import styles from "./globalLayout.module.scss";
import HeaderComponent from "../../Components/Header";
import { useEffect, useState } from "react";
import icon from "../../assets/POLO clogo.png";
import MobileHeader from "../../Components/MobileHeader";
import axios from "axios";
import onlineChatImg from "../../assets/cryptocurrency-color_chat.png";
import whatsAppChatImg from "../../assets/logos_whatsapp-icon.png";

const { Content, Header } = Layout;

const GlobalLayout = () => {
  const outlet = useOutlet();

  const location = useLocation();
  const BASEURL = import.meta.env.VITE_BASEURL;

  const [text, setText] = useState<any>([]);

  const getTexts = async () => {
    try {
      const response = await axios.get(`${BASEURL}/marqueetext/statements`);
      const data = response.data;
      console.log(data);
      setText(data);
      console.log(text);
    } catch (error) {
      console.error(error);
    }
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isChatVisible, setIsChatVisible] = useState(false); // Chat menu visibility

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setWindowWidth(currentWidth);
      console.log(windowWidth);

      if (currentWidth < 768) {
        setIsSidebarVisible(false);
      } else {
        setIsSidebarVisible(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    getTexts();
  }, []);

  return (
    <Layout
      style={{
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(90.23deg, #0C2E37 0.2%, #000000 129.15%)",
      }}
    >
      {location.pathname !== "/auth" && (
        <Header
          style={{
            position: "fixed",
            top: 0,
            width: "100vw",
            zIndex: 1000,
            height: "8vh",
            padding: "0px 0px",
            lineHeight: "17px",
            backgroundColor: "inherit",
          }}
        >
          {isSidebarVisible ? (
            <HeaderComponent></HeaderComponent>
          ) : (
            <>
              <MobileHeader></MobileHeader>
            </>
          )}
        </Header>
      )}

      <Layout
        style={
          location.pathname !== "/auth"
            ? {
                marginTop: windowWidth < 390 ? "12vh" : "10vh",
                background:
                  "linear-gradient(90.23deg, #0C2E37 0.2%, #000000 129.15%)",
              }
            : { background: "rgba(12, 46, 55, 1)" }
        }
      >
        <Content
          style={{
            overflow: "auto",
            overflowX: "hidden",
            margin: "1vh",
          }}
          className={styles.content_wrapper}
        >
          <div style={isSidebarVisible ? {} : { marginTop: "9dvh" }}>
            {outlet}
          </div>
        </Content>
      </Layout>

      <div
        className={styles.animated_button}
        onClick={() => setIsChatVisible(!isChatVisible)}
      >
        <img style={{ height: "100%" }} src={icon}></img>
      </div>
      {
        <div className={styles.animated_id}>
          <img
             onClick={() => {
              const phoneNumber = "9333333330";
              const message = "Hello, I would like to connect with you!";
              const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                message
              )}`;
              window.open(whatsappURL, "_blank");
            }}
            className={styles.IphoneStyle}
            src={whatsAppChatImg}
          ></img>
        </div>
      }

      {isChatVisible && (
        <div
          onClick={() => {
            window.location.href = "tel:9333333330";
          }}
          style={{
            position: "absolute",
            bottom: "9rem",
            right: "0rem",
            zIndex: 1000,
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <img src={onlineChatImg} alt="Online Chat" style={{ width: "70%" }} />
        </div>
      )}

      {isChatVisible && (
        <div
          onClick={() => {
            const phoneNumber = "9333333330";
            const message = "Hello, I would like to connect with you!";
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`;
            window.open(whatsappURL, "_blank");
          }}
          style={{
            position: "absolute",
            bottom: "3rem",
            right: "5rem",
            zIndex: 1000,
            borderRadius: "3vh",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <img
            src={whatsAppChatImg}
            alt="WhatsApp Chat"
            style={{ width: "70%" }}
          />
        </div>
      )}
    </Layout>
  );
};

export default GlobalLayout;
