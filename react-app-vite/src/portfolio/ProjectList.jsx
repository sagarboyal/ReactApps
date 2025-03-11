function ProjectList(){
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
        ]
    return (
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
    );
}

export default ProjectList;