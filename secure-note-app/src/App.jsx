import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutPage from "./components/about-page/AboutPage";
import ContactPage from "./components/contact-page/ContactPage";
import AccessDenied from "./components/auth/AccessDenied";
import Signup from "./components/auth/Signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Signup />
    </Router>
  );
}

export default App;
