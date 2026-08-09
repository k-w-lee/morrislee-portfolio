import Nav from './components/Nav'
import Hero from './components/Hero'
import SelectedWork from './components/SelectedWork'
import Experience from './components/Experience'
import Evidence from './components/Evidence'
import { Community, Publications, Education } from './components/Lists'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-[880px] px-6">
        <Hero />
        <SelectedWork />
        <Publications />
        <Experience />
        <Community />
        <Evidence />
        <Education />
        <Footer />
      </main>
    </div>
  )
}
