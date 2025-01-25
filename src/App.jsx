import "./App.css";
import { Banner } from "./components/banner/Banner";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/nav/Navbar";
import { RecipeCardSection } from "./components/section/RecipeCardSection";
import { Section } from "./components/section/Section";

function App() {
  return (
    <>
      <div className="container mx-auto w-4/5 pb-4">
        <Navbar></Navbar>
        <Banner></Banner>
        <Section></Section>
        <RecipeCardSection></RecipeCardSection>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
