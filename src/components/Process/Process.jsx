import './Process.scss'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaLightbulb, FaFileContract, FaPaintBrush, FaCode, FaSearch, FaCogs, FaRocket, FaLifeRing } from 'react-icons/fa'

function Process () {

    const steps = [
        {
            id: 1,
            title: "Descubrimiento y Planificación",
            description: "En esta fase, nos comunicaremos para entender tus necesidades, objetivos y expectativas. Definiré el propósito del sitio web, la estructura general y las funcionalidades necesarias. Esto puede incluir la elección de las secciones del sitio, las características específicas y el diseño visual.",
            icon: <FaLightbulb />
        },
        {
            id: 2,
            title: "Propuesta y aprobación",
            description: "Con base en la información recopilada, te enviaré una propuesta que incluirá el presupuesto y el cronograma estimado para el proyecto. Esta etapa es crucial para asegurarnos de que estamos alineados en cuanto a expectativas antes de comenzar.",
            icon: <FaFileContract />
        },
        {
            id: 3,
            title: "Diseño",
            description: "En esta fase, crearé un diseño visual para el sitio, basándome en tus preferencias y en las mejores prácticas de usabilidad. Este diseño será revisado y aprobado antes de continuar. También se adaptará a dispositivos móviles para asegurar una experiencia fluida en todos los dispositivos.",
            icon: <FaPaintBrush />
        },
        {
            id: 4,
            title: "Desarrollo",
            description: "Una vez aprobado el diseño, comenzaré con el desarrollo del sitio web. Utilizaré las tecnologías más adecuadas para crear un sitio funcional y atractivo. Durante esta fase, mantendré una comunicación constante para asegurarnos de que el progreso se ajusta a tus expectativas.",
            icon: <FaCode />
        },
        {
            id: 5,
            title: "Revisión y ajustes",
            description: "Una vez que el sitio esté listo, lo revisarás en detalle. Realizaré cualquier ajuste necesario basado en tus comentarios, ya sea en el diseño, la funcionalidad o el contenido.",
            icon: <FaSearch />
        },
        {
            id: 6,
            title: "Pruebas y optimización",
            description: "Después de revisar el sitio, realizaré pruebas para asegurar que todo funcione correctamente. También optimizaré el sitio para mejorar su rendimiento y la experiencia del usuario.",
            icon: <FaCogs />
        },
        {
            id: 7,
            title: "Lanzamiento",
            description: "Una vez que todo esté aprobado, procederé con el lanzamiento. Configuraré el dominio y realizaré el deploy del sitio en el servidor, asegurándome de que todo esté listo para que el sitio sea accesible al público.",
            icon: <FaRocket />
        },
        {
            id: 8,
            title: "Soporte y mantenimiento",
            description: "Después del lanzamiento, estaré disponible para cualquier ajuste o duda que pueda surgir. Ofrezco soporte para asegurarnos de que el sitio siga funcionando de manera óptima.",
            icon: <FaLifeRing />
        }
    ]

    return (
        <section className="process" id='process'>
            <h2 className="section-title">Proceso</h2>
            <p className='subtitle'>Ejemplo de un proceso para la construcción de un sitio web desde cero</p>

            <VerticalTimeline className='timeline'>
                {steps.map((step, idx) => (
                    <VerticalTimelineElement
                    key={idx}
                    iconStyle={{ background: '#ce12ce', color: '#fff' }}
                    icon={step.icon} >
                    <h3><span>{step.id}.</span>{step.title}</h3>
                    <p>{step.description}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
    )
}

export default Process