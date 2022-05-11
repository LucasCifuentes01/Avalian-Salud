import Header from "./components/header";
import Form from "./components/form";
import Planes from "./components/planes";
import Banner from "./components/banner";
import Prestadores from "./components/prestadores";
import Contacto from "./components/contacto";
import WppButton from "./components/wppButton";
import { useMobile } from "./hooks/useMobile";
import "./App.css";
import OsdePym from "./components/osdePym";

function App() {
  return (
    <div className="App">
      <Header />
      <OsdePym />
      {!useMobile() && <Form />}
      <Planes />
      <Banner />
      <Prestadores />
      <Contacto />
      <WppButton />
    </div>
  );
}

export default App;
