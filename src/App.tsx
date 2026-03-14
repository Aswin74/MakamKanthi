import Navbar from "./components/Navbar"
import About from "./contents/about/About"
import Hero from "./contents/hero/Hero"
import Services from "./contents/services/Services"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
      </main>
    </>
  )
}

export default App
