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
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

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
