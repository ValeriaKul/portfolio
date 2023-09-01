import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Projects/>
      <Technologies/>
      <Contacts/>
    </div>
  );
}

export default App;
