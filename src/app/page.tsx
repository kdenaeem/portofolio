import About from "../../components/about";
import Intro from "../../components/intro";
import Projects from "../../components/projects";
import SectionDivider from "../../components/section_divider";

export default function Home() {
  return (
    // centers all the items in that column
    <main className="flex flex-col items-center px-4">
      <Intro/ >
      <SectionDivider />
      <About />
      <Projects />

    </main>
  )
}
