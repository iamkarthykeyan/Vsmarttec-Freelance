import Founder from "../Sections/Home/Founder"
import Hero from "../Sections/Home/Hero"
import Services from "../Sections/Home/Services"

function HomePage() {
  return (
    <div>
      <h2>Homepage</h2>
      <Hero />
      <Services/>
      <Founder/>
    </div>
  )
}

export default HomePage