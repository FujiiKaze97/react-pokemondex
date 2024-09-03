import MOCK_DATA from "../../data/mock";
import PokemonCard from "../PokemonCard/PokemonCard";
import { PokemonListContainer } from './PokemonListStyle';

const PokemonList = () => {
  const data = MOCK_DATA;
  return (
    <PokemonListContainer className="pokemon-list-container">
      {data.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemonData={pokemon} />;
      })}
    </PokemonListContainer>
  );
};

export default PokemonList;
