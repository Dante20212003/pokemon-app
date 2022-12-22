import { Card, Grid } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FavoriteCardPokemon } from "./";

interface Props {
  favoritePokemons: number[];
}

export const FavoritePokemons = ({ favoritePokemons }: Props) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritePokemons.map((id) => (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
          <FavoriteCardPokemon id={id} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
