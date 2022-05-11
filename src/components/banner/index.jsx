import "./banner.css";
import imgBanner from "../../assets/banner2.f53746cc.png";
import Button from "../button";

const Banner = () => {
  const handleClick = () => {
    const form = document.getElementById("form");
    form.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="banner-container">
      <img className="banner-img" src={imgBanner} alt="banner" />
      <div className="banner-sub-container">
        <h2 className="banner-title">Cobertura en toda Argentina</h2>
        <p className="banner-description">
          Una obra social de excelencia pensada para vos y tu familia. Con
          diferentes planes diseñados para cubrir todas tus necesidades.
          <br />
          <br />
          Ideal para las familias con beneficios especiales por cada hijo que
          incorpores dentro de tu cobertura médica. El 2ndo hijo obtiene un
          descuento del 50% y cada hijo a partir del 3er un descuento del 83%.
          <br />
          <br />
          Todos los sanatorios presentes en la cartilla sirven tanto para
          guardia cómo para consultorios externos e internación.
        </p>
        <Button text="Solicitar Ahora" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Banner;
