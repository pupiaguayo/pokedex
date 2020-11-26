import React from "react";
import "./page-cards.css";
import PokeCard from "./components/pokeCard.js";
import Loading from "./components/Loading.js";
class PageCard extends React.Component {
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
        {this.state.loading && <Loading />}
        <div className="row">
          {this.state.pokemonId.map((item, i) => {
            return (
              <PokeCard
                img={item.sprites.other.dream_world.front_default}
                nombre={item.name.toUpperCase()}
                habUno={item.types[0].type.name.toUpperCase()}
                key={i}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
export default PageCard;
