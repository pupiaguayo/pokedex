import React from "react";
import "./pokeCard.css";
import { Link } from "react-router-dom";
class PokeCard extends React.Component {
  render() {
    let redirec = this.props.nombre;
    return (
      <div className="col-4 col-lg-4">
        <div className="tarjeta">
          <Link to={"/resultado?" + redirec}>
            <img src={this.props.img} alt="" className="imgCard" />
            <h1 className="titleCard">{this.props.nombre}</h1>
            <div className="habilidades">
              <p>{this.props.habUno}</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
export default PokeCard;
