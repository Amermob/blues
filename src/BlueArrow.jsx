import Landing from "./component file/Landing";
import Header from "./component file/Header";
import About from "./component file/About";
import Services from "./component file/Services";
import Projects from "./component file/Projects";
import Contact from "./component file/Contact";
import Footer from "./component file/Footer";
export default function BlueArrow() {
  return (
    <>
      <Landing />
      <Header />
      <About title="About Us:" />
      <Services title="Our Services" />
      <Projects title="Projects" />
      <Contact title="Contact" />
      <Footer />
    </>
  );
}
