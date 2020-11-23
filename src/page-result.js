import React from "react";
import "./page-result.css";
import Buscador from "./components/buscador.js";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import OtrosPokemones from "./components/otros-pokemones.js";
import CardResult from "./cards-result.js";
class PageResult extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="container">
          <Buscador></Buscador>
          <CardResult></CardResult>
          <OtrosPokemones></OtrosPokemones>
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}
export default PageResult;
