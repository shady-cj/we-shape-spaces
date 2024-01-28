import Hero from './components/hero'
import About from './components/about'
import Services from './components/services'
import Projects from './components/projects'
import Reviews from './components/reviews'
import Contact from './components/contact'

function App() {
  return (
    <div className='container mx-auto my-0 max-w-[1400px] overflow-x-hidden bg-black w-[100vw]'>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Reviews />
      <Contact />
    </div>
  )
}

export default App
