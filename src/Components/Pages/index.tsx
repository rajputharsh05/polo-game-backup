import { useEffect, useState } from "react";
import styles from "./pages.module.scss";
import axios from "axios";
import { Typography, Spin, message } from "antd";
import icon from "../../assets/premium support button copy.png";
import whatsAppChatImg from "../../assets/social-media-whatsapp-gold-silver-logo-isolated-transparent-background (1).png";


const Pages = () => {
  const BASEURL = import.meta.env.VITE_BASEURL;
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const getApiData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASEURL}/imagelinkforbackup/items/`);
      const data = response?.data;
      setData(data);
    } catch (error) {
      message.error("Unable to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography.Title className={styles.title}>
          Welcome to Polo.Game
        </Typography.Title>
        <Typography.Text className={styles.subtitle}>
          Where Every Bet is a New Adventure! 🎯💰
          <br />
          Get ready to ride the odds and make your winning move!
        </Typography.Text>
      </div>

      <div className={styles.card}>
        {loading ? (
          <Spin size="large" />
        ) : (
          <div className={styles.linkList}>
            {data.map((item) => (
              <div
                key={item.id}
                className={styles.linkCard}
                onClick={() => window.open(item.link, "_blank")}
              >
                <div className={styles.linkContent}>
                  <img
                    src={`data:image/png;base64,${item.image_base64}`}
                    alt="Website Thumbnail"
                    className={styles.thumbnail}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.header}>
        <div>
          <div className={styles.animated_button}>
            <img style={{ height: "100%" }} src={icon}></img>
          </div>
        </div>

        <Typography.Title className={styles.title}>
          Choose your site
        </Typography.Title>
        <Typography.Text className={styles.subtitle}>
          place your bets, and let the
          <br />
          excitement begin! 🎮🏇
        </Typography.Text>
        <div>
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
        </div>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.imageItem}>
          <img
            src="/images_for_redirection_page/18+only.png"
            alt="18+ only"
            className={styles.image}
          />
          <p className={styles.imageText}>18+ ONLY</p>
        </div>
        <div className={styles.imageItem}>
          <img
            src="/images_for_redirection_page/dmca_protected.png"
            alt="DMCA protected"
            className={styles.image}
          />
          <p className={styles.imageText}>DMCA Protected</p>
        </div>
        <div className={styles.imageItem}>
          <img
            src="/images_for_redirection_page/secure_payment.png"
            alt="Secure payment"
            className={styles.image}
          />
          <p className={styles.imageText}>100% Secure</p>
        </div>
      </div>
    </div>
  );
};

export default Pages;
