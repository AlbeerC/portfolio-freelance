import './ProjectsList.scss'
import Slider from '../Slider/Slider'
import { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import ProjectCard from '../ProjectCard/ProjectCard'

function ProjectsList () {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("/data/projects.json")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        if (!loading && window.location.hash === '#projects') {
            const element = document.getElementById('projects');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [loading]);

    if (loading) { return <Loading /> }

    return (
        <section className="projects" id='projects'>
            <h2 className='section-title'>Mis proyectos</h2>
                <div className="projects-list">
                    {data.map((project, index) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
        </section>
    )
}

export default ProjectsList