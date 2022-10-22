import "./App.css";
import Footer from "./components/Footer/Footer";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import TextSetion from "./components/TextSection/TextSetion";
import { sectionArr } from "./constants/constant";

function App() {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      {sectionArr.map((obj) => {
        return <ImageContainer sectionContent={obj}></ImageContainer>;
      })}
      <TextSetion></TextSetion>
      <Footer></Footer>
    </div>
  );
}

export default App;
