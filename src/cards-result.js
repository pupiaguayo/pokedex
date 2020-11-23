import React from "react";
import "./cards-result.css";
class CardResult extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="pokemonElegido">
          <div className="imagenElegido">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg"
              alt=""
            />
            <h1>Raichu</h1>
          </div>
          <div className="atributos">
            <h2>Tipo</h2>
            <p>asddasasd</p>
            <p>adsadsasd</p>
            <h2>Debilidad</h2>
            <p>asddsadsa</p>
            <p>asdsaddsa</p>
            <p>asdsad</p>
            <p>asfdsadd</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default CardResult;
