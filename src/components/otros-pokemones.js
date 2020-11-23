import React, { Component } from "react";
import PokeCard from "./pokeCard.js";
import "./otrosPokemones.css";
class OtrosPokemones extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container otrasTarjetas">
          <div className="row">
            <h1>Otros Pokemomes</h1>
          </div>
          <div className="row">
            <PokeCard
              img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg"
              name="ASD"
              habUno="sadads"
            />
            <PokeCard
              img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg"
              name="ASD"
              habUno="sadads"
            />
            <PokeCard
              img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg"
              name="ASD"
              habUno="sadads"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default OtrosPokemones;
