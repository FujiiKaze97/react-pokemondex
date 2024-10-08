import usePokemon from "../../hooks/usePokemon";
import {
  DashboardConatiner,
  DashBoardImg,
  DashBoardItem,
  DashBoardItemBox,
  DashBoardTItle,
} from "./DashboardStyle";
import PokemonCard from "../PokemonCard/PokemonCard";

const Dashboard = () => {
  const { selectedPokemon } = usePokemon();
  return (
    <DashboardConatiner className="dashboard-container">
      <DashBoardTItle className="dashboard-title">This is Pokemon dex </DashBoardTItle>

      <DashBoardItemBox className="dashboard-item-box">
        {selectedPokemon.map((element, index) => {
          return element !== null ? (
            <PokemonCard
              className="selected-pokemon-card"
              key={index}
              pokemonData={element}
              isSelect={true}
            />
          ) : (
            <DashBoardItem className="dashboard-item" key={index}>
              <DashBoardImg
                className="dashboard-pokemon-ball"
                src="./src/assets/test.png"
              />
            </DashBoardItem>
          );
        })}
      </DashBoardItemBox>
    </DashboardConatiner>
  );
};

export default Dashboard;
