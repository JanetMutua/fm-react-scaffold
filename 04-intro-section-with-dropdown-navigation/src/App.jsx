import "./App.css";
// import Hero from "./components/hero";
import { Navigation } from "./components/navigation/navigation";
import { Hero } from "./components/hero/hero";

function App() {
  return (
    <>
      <main className="landing-page">
        <Navigation />
        <Hero />
      </main>
    </>
  );
}

export default App;
