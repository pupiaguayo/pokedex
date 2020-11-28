import React, { Component } from "react";
import PokeCard from "./pokeCard.js";
import "./otrosPokemones.css";
import { Link } from "react-router-dom";
class OtrosPokemones extends React.Component {
  state = {
    loading: false,
    pokemon: [],
    pokemonId: [],
  };
  componentDidMount() {
    this.fetchData(`https://pokeapi.co/api/v2/pokemon?limit=21`);
  }
  fetchData = async (url) => {
    this.setState({
      loading: true,
    });
    const arr = [];
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      pokemon: data.results,
    });
    console.log(data);
    data.results.map(async (item) => {
      const resultados = await fetch(item.url);
      arr.push(await resultados.json());
      this.setState({
        loading: false,
        pokemonId: arr,
      });
      console.log(arr);
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container otrasTarjetas">
          <div className="row">
            <h2>Otros Pokemomes</h2>
          </div>
          <div className="row">
            {this.state.pokemonId.slice(0, 6).map((item, i) => {
              return (
                <PokeCard
                  img={item.sprites.other.dream_world.front_default}
                  nombre={item.name}
                  habUno={item.types[0].type.name.toUpperCase()}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default OtrosPokemones;
