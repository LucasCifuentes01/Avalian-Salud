import Card from "../card";
import Button from "../button";
import phone from "../../assets/icons/phone.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import email from "../../assets/icons/email.svg";
import clock from "../../assets/icons/clock.svg";
import { phoneNumber, emailPersonal } from "../../constants/personalConfig";
import "./contacto.css";

const CardItem = ({ icon, title, description }) => (
  <div className="cardItem-container">
    <div className="cardItem-icon-container">
      <img className="CardItem__svg-contacto" src={icon} alt="icono" />
    </div>
    <div className="cardItem-icon-container-2">
      <h3 className="cardItem-title">{title}</h3>
      <p className="cardItem-text">{description}</p>
    </div>
  </div>
);

const Contacto = () => {
  const handleClick = () => {
    const form = document.getElementById("form");
    form.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="detail-container">
      <div className="detail-sub-container">
        <Card>
          <CardItem
            icon={phone}
            title="Llamanos al"
            description={phoneNumber}
          />
          <CardItem
            icon={whatsapp}
            title="¡Hablanos por WhatsApp!"
            description={phoneNumber}
          />
          <CardItem icon={email} title="Contacto" description={emailPersonal} />
          <CardItem
            icon={clock}
            title="Horario de Atención"
            description="8am a 4pm"
          />
          <Button text="Empieza Ahora" marginTop={20} onClick={handleClick} />
        </Card>
      </div>
    </div>
  );
};

export default Contacto;
