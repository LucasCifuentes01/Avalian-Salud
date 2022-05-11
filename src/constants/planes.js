import imgPlanIntegral from "../assets/Plan_Integral.26c0bd52.png";
import imgPlanSuperior from "../assets/Plan_Superior.96c0472a.png";
import imgPlanSelecta from "../assets/Plan Selecta.4a8f834b.png";

const PlanIntegral = {
  title: "Plan Integral (AS200/204)",
  image: imgPlanIntegral,
  color: "rgb(0, 109, 74)",
  description:
    "Un plan flexible y accesible que se adapta a tu uso y necesidades.",
};
const PlanSuperior = {
  title: "Plan Superior (AS300)",
  image: imgPlanSuperior,
  color: "rgb(76, 76, 76)",
  description:
    "Solidez y confort en una amplia gama de servicios y prestaciones.",
};
const PlanSelecta = {
  title: "Plan Selecta (AS400/500)",
  image: imgPlanSelecta,
  color: "rgb(46, 67, 128)",
  description: "Máxima calidad en prestaciones y atención personalizada.",
};

const planes = [PlanIntegral, PlanSuperior, PlanSelecta];

export { planes };
