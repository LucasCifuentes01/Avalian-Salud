import "./wppButton.css";

const WppButton = () => {
  const wppUrl = "https://wa.me/541149161339";
  return (
    <a href={wppUrl} target="_blank" rel="noreferrer">
      <div className="wppButton"></div>
    </a>
  );
};

export default WppButton;
