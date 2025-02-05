import image from "../../assets/Side-ad-main-page.png";

const MarqueeImage = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
        position: "relative",
        height: "50px", 
      }}
    >
      <img
        style={{
          width: "2vw",
          position: "absolute",
          animation: "marquee 10s linear infinite",
        }}
        src={image}
        alt="Scrolling Image"
      />
    </div>
  );
};

const styles = `
@keyframes marquee {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default MarqueeImage;
