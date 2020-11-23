import React from "react";
import "./buscador.css";
class Buscador extends React.Component {
  state = {
    busqueda: "",
  };
  render() {
    return (
      <React.Fragment>
        <div className="buscador">
          <div className="input">
            <h1>Nombre</h1>
            <input
              type="text"
              placeholder="Ej: Pikachu"
              value={this.props.busqueda}
              onChange={this.props.onChange}
              name="Buscador"
            />
            <button>Buscar</button>
          </div>
          <div className="tarjetaBusqueda">
            <p>Busca a tu pokemon favorito ingresando su nombre </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Buscador;
