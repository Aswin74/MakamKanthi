import Hero from "./contents/Hero"
import Navbar from "./components/Navbar"
import Services from "./contents/Services"

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
