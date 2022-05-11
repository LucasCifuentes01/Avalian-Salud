import osdePymImgText from "../../assets/OsdepymText.jpeg";
import osdePymImg from "../../assets/osdePymSinFondo.jpg";
import "./osdepym.css";

const OsdePym = () => {
  return (
    <div className="osdepym">
      <img src={osdePymImgText} alt="Osdepym" />
      <p className="osdepym__text">
        Si tenes Osdepym consulta por nuestros planes combinados
      </p>
      <img src={osdePymImg} width="350" alt="Osdepym logo" />
    </div>
  );
};

export default OsdePym;
