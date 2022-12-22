import { Card, Grid, Row, Text } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { SmallPokemon } from "../../interfaces";

interface Props {
  pokemon: SmallPokemon;
}
export const PokemonCard = ({ pokemon: { id, name, img } }: Props) => {
  return (
    <Link href={`/name/${name}`}>
      <Card isHoverable isPressable>
        <Card.Body css={{ p: 20 }}>
          <Card.Image src={img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text b transform="capitalize">
              {name}
            </Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Link>
  );
};
