import './App.css'
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Header from './component/Header';
import ProjectList from './component/ProjectList';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
