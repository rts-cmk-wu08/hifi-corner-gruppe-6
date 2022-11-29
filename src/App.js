import AvesomeIcon from "./components/AwesomeIcon";
import Footer from "./templates/Footer";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function App() {
  return (
    <div className="App">
      <h1></h1>
      <Footer />
    </div>
  );
}

export default App;
