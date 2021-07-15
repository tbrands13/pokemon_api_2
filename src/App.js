import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';
import Poke from "./components/Pokedex";
import { useState } from 'react';

function App() {
const [pokemon, setPokemon] = useState([]);
const [pokemonInfo, setPokemonInfo] = useState("");


  const usePokedex = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1118")
      .then(res=> {
        console.log(res)
        setPokemon(res.data.results)
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="App">
      <h1>Pokemon API with axios</h1>
      <input type="submit" onClick={usePokedex} className="btn btn-warning" value="Use Pokedex"/>
      <Poke pokemon={pokemon}/>
    </div>
  );
}

export default App;
