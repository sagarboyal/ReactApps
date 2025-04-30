import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutPage from "./components/about-page/AboutPage";

function App() {
  return (
    <Router>
      <Navbar />
      <AboutPage />
    </Router>
  );
}

export default App;
