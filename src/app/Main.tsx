import Header from "../components/Header";
import Navigation from "./../components/Navigation";
import Slider from "./../components/Slider";
import Search from "./../components/Search";
import Footer from "./../components/Footer";
import Logo from "./../components/Logo";

export default function Main() {
  return (
    <>
      <Header></Header>
      <Navigation></Navigation>
      <Logo></Logo>
      <Search></Search>
      <Slider></Slider>
      <Footer></Footer>
    </>
  );
}
