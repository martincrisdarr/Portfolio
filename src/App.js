import Navbar from "./Components/Navbar/Navbar";
import Habilities from "./Views/Habilities/Habilities";
import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import Work from "./Views/Work/Work";
import Contact from "./Views/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Habilities />
      <About />
      <Work />
      <Contact />
    </>
  );
}

export default App;
