import { Card } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

interface Props {
  id: number;
}

export const FavoriteCardPokemon = ({ id }: Props) => {
  return (
    <Link href={`pokemon/${id}`}>
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        ></Card.Image>
      </Card>
    </Link>
  );
};
