import Hero from '../Hero/Hero'
import About from '../About/About'
import ProjectsList from '../ProjectsList/ProjectsList'
import Contact from '../Contact/Contact'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react'

function MainLayout() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 300) // Pequeña espera para asegurar que la vista se ha cargado
    }
  }, [location])

  return (
    <main>
      <Hero />
      <About />
      <ProjectsList />
      <Contact />
    </main>
  );
}

export default MainLayout;
