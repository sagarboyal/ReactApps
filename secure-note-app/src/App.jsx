import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutPage from "./components/about-page/AboutPage";
import ContactPage from "./components/contact-page/ContactPage";

function App() {
  return (
    <Router>
      <Navbar />
      <ContactPage />
    </Router>
  );
}

export default App;
