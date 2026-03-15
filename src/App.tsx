import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./contents/about/About"
import Contact from "./contents/contact/Contact"
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
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
