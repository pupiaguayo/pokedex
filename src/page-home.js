import React from "react";
import Buscador from "./components/buscador.js";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import PageCard from "./page-cards.js";
import "./page-home.css";
class PageHome extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/resultado?" + this.state.busqueda.toLowerCase());
  };
  handleChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };
  state = {
    busqueda: "",
  };
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="container">
          <form className="buscador" name="form" onSubmit={this.handleSubmit}>
            <div className="input">
              <h1>Nombre</h1>
              <input
                type="text"
                placeholder="Ej: Pikachu"
                value={this.state.busqueda}
                onChange={this.handleChange}
                name="Buscador"
              />
              <button type="submit">Buscar</button>
            </div>
            <div className="tarjetaBusqueda">
              <p>
                Seleccioná un pokemon de la lista o busca a tu favorito
                ingresando su nombre.
              </p>
            </div>
          </form>
          <PageCard />
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}
export default PageHome;
