import React from "react";
import "./page-cards.css";
import PokeCard from "./components/pokeCard.js";
class PageCard extends React.Component {
  state = {
    poke: [],
  };
  componentDidMount() {
    this.fetchData(`https://pokeapi.co/api/v2/pokemon?limit=21`);
  }
  fetchData = async (url) => {
    const arr = [];
    const response = await fetch(url);
    const data = await response.json();
    data.results.map(async (item) => {
      const resultados = await fetch(item.url);
      const pokemones = await resultados.json();
      arr.push(pokemones);
    });
    this.setState({
      poke: [arr],
    });
    console.log(arr, "ApiContenido");
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          {this.state.poke.map((item, i) => {
            return <PokeCard nombre={item.id} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}
export default PageCard;
