
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Proyects from './components/Proyects';
import Contact from './components/Contact';
import Nav from './components/Nav.jsx'



function App() {
  return (
    <div>
      <Nav/>
      <Intro />
      <About />
      <Skills />
      <Proyects />
      <Contact />
    </div>
  );
}

export default App;
