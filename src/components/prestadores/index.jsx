import "./prestadores.css";
import prestadoresImgs from "../../constants/prestadores";

const Prestadores = () => (
  <>
    <h2 className="title-prestadores">
      Contamos con los centros médicos más prestigiosos. Amplia cartilla de
      prestadores en todo el país.
    </h2>
    <div className="prestadores-container">
      {prestadoresImgs.map((prestador, index) => (
        <img
          className="prestadores-img"
          src={prestador.img}
          alt="prestador imagen"
          key={index}
        />
      ))}
    </div>
  </>
);

export default Prestadores;
