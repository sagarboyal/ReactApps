import './App.css'

function App() {
  const name = 'Sagar Boyal';
  const profession = 'Software Developer';
  const project = [
  {
    name: 'Project 1',
    description: 'This is project 1',
    link:'#'
  },
  {
    name: 'Project 2',
    description: 'This is project 2',
    link:'#'
  },
  {
    name: 'Project 2',
    description: 'This is project 2',
    link:'#'
  }
  ];
  return (
    <div className="App">
      {/* Header */}
      <header className='header'>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href="#about">About </a> 
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      {/* About */}
      <section className='about' id='about'>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          vehicula, purus nec efficitur aliquam, arcu est ultrices purus, nec
          tincidunt ligula turpis nec nunc. Nullam vehicula, purus nec efficitur
          aliquam, arcu est ultrices purus, nec tincidunt ligula turpis nec nunc.
        </p>
      </section>
      {/* Projects */}
      <section className='projects' id='projects'>
        <h2>Projects</h2>
        <div className='project-list'>
          {project.map((project, index) => (
            <div className='project-item' key={index}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link}>View</a>
            </div>
          ))}
        </div>
      </section>
      {/* Contact */}
      <section className='contact' id='contact'>
        <h2>Contact</h2>
        <p>If you would like to contact me, feel free to email me at <a href="mailto:example@org.com">example@org.com</a></p>       
      </section>
      {/* Footer */}
      <footer className='footer'>
        <p>&copy; 2025 {name}</p>
      </footer>
    </div>
  )
}

export default App
