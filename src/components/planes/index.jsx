import { planes } from "../../constants/planes";
import "./planes.css";

const PlanItem = ({ image, title, description, color }) => (
  <div>
    <img className="image" src={image} alt={title} />
    <h3 style={{ color }} className="plan-card-title">
      {title}
    </h3>
    <p className="text"> {description} </p>
  </div>
);

const Planes = () => (
  <div className="planes-container">
    <h2 className="titulo">
      ¡Hasta un 35% de ahorro en tus planes contratando ahora!{" "}
    </h2>
    <div className="planes-sub-container">
      {planes.map((plan) => (
        <PlanItem
          image={plan.image}
          title={plan.title}
          description={plan.description}
          color={plan.color}
          key={plan.title}
        />
      ))}
    </div>
  </div>
);

export default Planes;
