import { useEffect, useState } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { Layout } from "../../components/layout";
import pokeApi from "../../api/pokeApi";
import { Pokemon, PokemonListResponse } from "../../interfaces";
import { existInFavorites, getPokemonsInfo, toggleFavorite } from "../../utils";

interface Props {
  pokemon: Pokemon;
}

export const PokemonByNamePage = ({ pokemon }: Props) => {
  const [isInFavorites, setIsInFavorites] = useState(
    existInFavorites(pokemon.id)
  );

  if (!pokemon.name) {
    return (
      <Layout title="Algun pokemin">
        <div>ERROR AL OBTENER</div>
      </Layout>
    );
  }

  const onToggleFavorite = () => {
    setIsInFavorites(!isInFavorites);
    toggleFavorite(pokemon.id);
  };

  /* useEffect(() => {
    setIsInFavorites(existInFavorites(pokemon.id));
  }, []); */

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ mt: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ p: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card css={{ p: "30px" }}>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1>{pokemon.name}</Text>
              <Button
                color="gradient"
                ghost={!isInFavorites}
                onClick={onToggleFavorite}
              >
                {isInFavorites ? "Quitar de favoritos" : "Guardar en favoritos"}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites</Text>

              <Container direction="row" display="flex">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi<PokemonListResponse>("/pokemon?limit=151");

  const pokemonNames: string[] = data.results.map((pokemon) => pokemon.name);

  return {
    paths: pokemonNames.map((name) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { name } = params as { name: string };

    return {
      props: {
        pokemon: await getPokemonsInfo(name),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        pokemon: {},
      },
    };
  }
};

export default PokemonByNamePage;
