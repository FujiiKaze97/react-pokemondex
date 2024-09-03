import { useNavigate } from "react-router-dom";
import { HomeContainer, PokemonLogo } from "./HomeStyles";
import StyledButton from "../../styles/StyledButton";

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <PokemonLogo src="src/assets/pokemon-logo.png" alt="포켓몬 로고" />
      <StyledButton
        width={"240px"}
        height={"50px"}
        fontSize={"35px"}
        onClick={() => navigate("/dex")}
      >
        포켓몬 도감 Start
      </StyledButton>
    </HomeContainer>
  );
};

export default Home;
