import React from "react";
import PokeCardEleg from "./components/pokeCardElegida.js";
import Loading from "./components/Loading.js";
import OtrosPokemones from "./components/otros-pokemones.js";
class CardResult extends React.Component {
  state = {
    loading: false,
    pokemonResultado: [],
  };
  componentWillReceiveProps(e) {
    let termino = e.busqueda;
    this.fetchData("https://pokeapi.co/api/v2/pokemon/" + termino + "");
  }
  fetchData = async (url) => {
    this.setState({
      loading: true,
    });
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      loading: false,
      pokemonResultado: [data],
    });
    console.log(data, "");
  };
  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        {this.state.pokemonResultado.map((item, i) => {
          return (
            <PokeCardEleg
              imgE={item.sprites.other.dream_world.front_default}
              nombreE={item.name.toUpperCase()}
              atributoUno={item.weight}
              atributoDos={item.height}
              atributoTres={item.types[0].type.name.toUpperCase()}
              key={i}
            />
          );
        })}
        <OtrosPokemones />
      </React.Fragment>
    );
  }
}
export default CardResult;
