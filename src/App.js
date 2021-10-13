import NavBar from "./components/navigation/NavBar";
import Hero from "./components/hero/Hero";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <main className="font-montserrat bg-earth-gray-900 main-container">
      <SideBar />
      <NavBar />
      <Hero />
    </main>
  );
}

export default App;
