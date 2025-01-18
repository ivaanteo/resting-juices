import NavBar from "./components/NavBar";
import ContactSection from "./sections/ContactSection";
import DiningSection from "./sections/DiningSection";
import IntroSection from "./sections/IntroSection";
import MenuSection from "./sections/MenuSection";

function App() {

  return (
    <>
      <NavBar />
      <IntroSection />
      <DiningSection />
      <MenuSection />
      <ContactSection />
    </>
  );
}

export default App;
