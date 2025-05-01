import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutPage from "./components/about-page/AboutPage";
import ContactPage from "./components/contact-page/ContactPage";
import AccessDenied from "./components/auth/AccessDenied";

function App() {
  return (
    <Router>
      <Navbar />
      <AccessDenied />
    </Router>
  );
}

export default App;
