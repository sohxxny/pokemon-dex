import { useSearchParams } from "react-router-dom";
import { MOCK_DATA } from "../data/mockData";
import { PokemonDetail } from "../components/PokemonDetail";
import styled from "styled-components";
import { colors } from "../styles/colors";

/**
 * * 포켓몬의 상세 정보를 보여주는 페이지
 */
export const Detail = () => {
  const [searchParams] = useSearchParams();
  const pokemonId = searchParams.get("id");

  // * id를 통해 해당 포켓몬 데이터를 반환하는 함수
  const searchPokemon = (id) => {
    return MOCK_DATA.find((pokemon) => pokemon.id === Number(id));
  };

  const pokemon = searchPokemon(pokemonId);

  return (
    <StyledDetailPage>
      <PokemonDetail pokemon={pokemon} />
    </StyledDetailPage>
  );
};

const StyledDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${colors.background};
`;
