import './Prices.scss'
import { FaCheck } from "react-icons/fa"
import { Link } from 'react-router-dom'

function Prices () {

    const plans = [
        {
            title: "Sitio Web Básico",
            price: "$100.000 - $200.000",
            time: "1-2 semanas",
            features: [
                "Hasta 5 secciones esenciales",
                "Funcionalidades mínimas",
                "Optimización SEO básica",
                "Formulario de contacto",
                "Integración con redes sociales",
                "Diseño adaptado a cualquier dispositivo",
                "https://skull-master.vercel.app/"
            ]
        },
        {
            title: "Sitio Web Intermedio",
            time: "2-3 semanas",
            price: "$200.000 - $300.000",
            features: [
              "Hasta 6 secciones completas",
              "Funcionalidades más avanzadas",
              "Optimización SEO básica",
              "Formulario de contacto personalizado",
              "Integración con redes sociales",
              "Diseño adaptado a cualquier dispositivo",
              "https://gympower25.vercel.app/"
            ]
        },
        {
            title: "Sitio Web Avanzado",
            time: "3-5 semanas",
            price: "$300.000 - $500.000",
            features: [
              "+7 Secciones personalizadas",
              "Funcionalidades interactivas como autenticación de usuarios, calendario de reservas, base de datos básica, panel de administración básico",
              "Formulario de contacto personalizado",
              "Integración con redes sociales y herramientas de marketing",
              "Diseño adaptado a cualquier dispositivo",
              "https://dublin-f482a.web.app/"
            ]
        }
    ]

    return (
        <section className="prices" id='prices'>
            <div className="texts">
                <h2 className="section-title">Planes de servicio</h2>
                <p className='subtitle'>Estimación general del tiempo y presupuesto dependiendo del tipo de proyecto. Tener en cuenta que estos valores pueden variar dependiendo de los detalles específicos y funcionalidades requeridas.</p>
            </div>
            <div className="flex">
                {plans.map((plan, index) => (
                    <div className='plan-card' key={index}>
                        <h4>{plan.title}</h4>
                        <h3>{plan.price}</h3>
                        <p>{plan.time}</p>
                        <ul>
                            {plan.features.map((feature, idx) => (
                                <li key={idx}>
                                    <FaCheck />
                                    {feature.startsWith("http") ? (
                                    <a href={feature} target="_blank" rel="noopener noreferrer">
                                        Ver ejemplo
                                    </a>
                                ) : (
                                    feature
                                )}
                                </li>
                            ))}
                        </ul>
                        <Link to='/#contact' className='btn'>Consultar</Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Prices