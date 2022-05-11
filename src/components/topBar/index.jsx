import "./topbar.css";
import { phoneNumber } from "../../constants/personalConfig";

const TopBar = () => (
  <div className="top-bar">
    <p className="topbar__title">Avalian</p>
    <p className="topbar__title">{phoneNumber}</p>
  </div>
);

export default TopBar;
