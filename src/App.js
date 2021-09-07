
import "./App.css";
import {useState} from "react";
import axios from "axios";

function App() {

  const [pokemonList, setPokemonList] = useState([]);

  //fetch
  const fetchPokemon = (props) => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(jsonResponse.results);
        setPokemonList(jsonResponse.results)
      })
      .catch(err => console.log(err))
  }

  //axios
  const axiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(resp => {
      const {results} = resp.data
      console.log(results);
      setPokemonList(results)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <button onClick={axiosPokemon}>Axios Pokemon</button>
      {
        pokemonList.map((pokemon, i) => (
          <p key={i}>
            <span> {pokemon.name} </span>
          </p>
        ))
      }
    </div>
  );
}

export default App;
