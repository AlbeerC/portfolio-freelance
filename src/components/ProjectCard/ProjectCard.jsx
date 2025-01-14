import './ProjectCard.scss'

function ProjectCard ({ project }) {

    return (
        <div className="project-card">
            <img src={project.img} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.text ? project.text : "asd"}</p>
            <button><a href={project.url}>Ver web</a></button>
        </div>
    )
}

export default ProjectCard