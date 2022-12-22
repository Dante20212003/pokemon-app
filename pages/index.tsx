import { GetStaticProps } from "next";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import pokeApi from "../api/pokeApi";
import { Layout } from "../components/layout";
import { Content } from "../components/ui/Content";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { PokemonCard } from "../components/pokemon";
import Image from "next/image";

interface Props {
  pokemons: SmallPokemon[];
}

const Home = ({ pokemons }: Props) => {
  return (
    <Layout>
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <Grid key={pokemon.id} xl={2} xs={6} sm={3} md={2}>
            <PokemonCard pokemon={pokemon} />
          </Grid>
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  /* LIMIT 649 */
  const { data } = await pokeApi<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => {
    return {
      ...pokemon,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        i + 1
      }.svg`,
      id: i + 1,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
};
export default Home;
