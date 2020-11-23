import React from "react";
import "./pokeCard.css";
class PokeCard extends React.Component {
  render() {
    return (
      <div className="col-4 col-lg-4">
        <div className="tarjeta">
          <img src={this.props.img} alt="" className="imgCard" />
          <h1 className="titleCard">{this.props.nombre}</h1>
          <div className="habilidades">
            <p>{this.props.habUno}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default PokeCard;
