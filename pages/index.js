import { Section, Introduction, Skills, Projects, Contact, Nav } from '@/components/modules'
import { createContext, useState } from 'react'

export const Context = createContext()

export default function Home() {

  const [sectionName, setSectionName] = useState('introduction')

  const navToSection = (sectionName) => {

    switch (sectionName) {
      case 'introduction':
        return <Introduction />
      case 'skills':
        return <Skills />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <Introduction />
    }

  }

  return (
    <Context.Provider value={{ sectionName, setSectionName }}>

      <div className="flex flex-col w-screen h-screen items-center justify-center bg-zinc-900 p-4">

        <Nav />
        <Section>
          {navToSection(sectionName)}
        </Section>

      </div>

    </Context.Provider>
  )
}