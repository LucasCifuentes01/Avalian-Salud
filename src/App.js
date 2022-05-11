import Header from "./components/header";
import FormMobile from "./components/formMobile";
import Planes from "./components/planes";
import Banner from "./components/banner";
import Prestadores from "./components/prestadores";
import Contacto from "./components/contacto";
import WppButton from "./components/wppButton";
import "./App.css";
import OsdePym from "./components/osdePym";

function App() {
  return (
    <div className="App">
      <Header />
      <OsdePym />
      <FormMobile />
      <Planes />
      <Banner />
      <Prestadores />
      <Contacto />
      <WppButton />
    </div>
  );
}

export default App;
