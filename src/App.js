import NavBar from "./components/navigation/NavBar";
import Hero from "./components/hero/Hero";
import LinkSideBar from "./components/sidebar/LinkSideBar";
import Projects from "./components/projects/Projects";
import EmailSideBar from "./components/sidebar/EmailSideBar";

function App() {
  return (
    <main className="font-montserrat bg-earth-gray-900 main-container">
      <LinkSideBar />
      <EmailSideBar />
      <NavBar />
      <Hero />
      <Projects />
    </main>
  );
}

export default App;
