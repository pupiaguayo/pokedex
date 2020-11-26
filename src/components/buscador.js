import React from "react";
import "./buscador.css";
class Buscador extends React.Component {
  state = {
    busqueda: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Yei");
  };
  render() {
    return (
      <React.Fragment>
        <form className="buscador" name="form" onSubmit={this.handleSubmit}>
          <div className="input">
            <h1>Nombre</h1>
            <input
              type="text"
              placeholder="Ej: Pikachu"
              value={this.props.busqueda}
              onChange={this.props.onChange}
              name="Buscador"
            />
            <button type="submit">Buscar</button>
          </div>
          <div className="tarjetaBusqueda">
            <p>Busca a tu pokemon favorito ingresando su nombre </p>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
export default Buscador;
