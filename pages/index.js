import { Section, Introduction, Skills, Projects, Contact } from '@/components/modules'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between bg-slate-950 py-10 px-2 md:p-24 gap-10">
      <Section>
        <Introduction />
      </Section>
      <Section>
        <Skills />
      </Section>
      <Section>
        <Projects />
      </Section>
      <Section>
        <Contact />
      </Section>
    </main>
  )
}