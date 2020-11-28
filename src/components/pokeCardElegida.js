import React from "react";
import "./pokeCardElegida.css";
class PokeCardEleg extends React.Component {
  render() {
    return (
      <div className="pokemonElegido">
        <div className="imagenElegido">
          <img src={this.props.imgE} alt="" />
          <h1>{this.props.nombreE}</h1>
        </div>
        <div className="atributos">
          <h2>ATRIBUTOS</h2>
          <p>PESO: {this.props.atributoUno}</p>
          <p>ALTURA: {this.props.atributoDos} CM</p>
          <p>TIPO: {this.props.atributoTres}</p>
        </div>
      </div>
    );
  }
}
export default PokeCardEleg;
