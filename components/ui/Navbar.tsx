import {
  Navbar,
  Button,
  Link,
  Text,
  Dropdown,
  Avatar,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import LinkNext from "next/link";
import { SearchIcon } from "../icons/SearchIcon";

const collapseItems = ["Favoritos"];

export const NavbarUI = () => {
  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Toggle showIn="xs" />

      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Navbar.Content enableCursorHighlight activeColor="warning" hideIn="xs">
          <LinkNext href="/">
            <a>
              <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                layout="fixed"
                width={70}
                height={70}
                alt="Logo Pokemon"
              />
            </a>
          </LinkNext>
        </Navbar.Content>

        <LinkNext href="/">
          <a>
            <Text b css={{ marginLeft: "10px" }}>
              POKEAPP
            </Text>
          </a>
        </LinkNext>
      </Navbar.Brand>

      <Navbar.Content
        css={{
          marginLeft: "40px",
          w: "100%",
          display: "flex",
          jc: "space-between",
          "@xsMax": {
            marginLeft: "10px",
          },
        }}
      >
        <Navbar.Item
          css={{
            marginLeft: "10px",
            w: "100%",
          }}
        >
          <Input
            aria-label="search"
            clearable
            contentLeft={
              <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
            }
            contentLeftStyling={false}
            css={{
              w: "100%",

              "& .nextui-input-content--left": {
                h: "100%",
                ml: "$4",
                dflex: "center",
              },
            }}
            placeholder="Search..."
          />
        </Navbar.Item>
      </Navbar.Content>

      <LinkNext href="/favoritos">
        <a>
          <Text b css={{ marginLeft: "10px" }}>
            Favoritos
          </Text>
        </a>
      </LinkNext>

      <Navbar.Collapse disableAnimation>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="warning"
            css={{
              color: index === collapseItems.length - 1 ? "$error" : "",
            }}
            isActive={index === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
