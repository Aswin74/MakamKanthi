import Navbar from "./components/Navbar"
import Hero from "./contents/hero/Hero"
import Services from "./contents/services/Services"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
    </>
  )
}

export default App
