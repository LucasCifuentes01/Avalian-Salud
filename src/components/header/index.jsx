import { useMobile } from "../../hooks/useMobile";
import Form from "../form";
import TopBar from "../topBar";
import "./header.css";

const Header = () => (
  <header>
    <TopBar />
    <div className="titles">
      <h2 className="sub-title"> AVALIAN COBERTURA MÉDICA </h2>
      <h1 className="title"> Cobertura Médica Integral </h1>
    </div>
    {useMobile() && <Form />}
  </header>
);

export default Header;
