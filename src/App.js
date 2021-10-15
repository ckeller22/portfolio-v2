import NavBar from "./components/navigation/NavBar";
import Hero from "./components/hero/Hero";
import SideBar from "./components/sidebar/SideBar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <main className="font-montserrat bg-earth-gray-900 main-container">
      <SideBar />
      <NavBar />
      <Hero />
      <Projects />
    </main>
  );
}

export default App;
