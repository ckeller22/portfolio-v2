import NavBar from "./components/navigation/NavBar";
import Hero from "./components/hero/Hero";
import SocialSideBar from "./components/sidebar/SocialSideBar";
import Projects from "./components/projects/Projects";
import EmailSideBar from "./components/sidebar/EmailSideBar";

function App() {
  return (
    <main className="font-montserrat bg-earth-gray-900 main-container">
      <SocialSideBar />
      <EmailSideBar />
      <NavBar />
      <Hero />
      <Projects />
    </main>
  );
}

export default App;
