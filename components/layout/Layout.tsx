import Head from "next/head";
import { useRouter } from "next/router";
import { styled } from "@nextui-org/react";
import { NavbarUI } from "../ui";

export const Box = styled("div", {
  boxSizing: "border-box",
});

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Dante Arias" />
        <meta name="description" content="Informacion sobre pokemone" />
        <meta name="keywords" content="pokemon, pokedex" />

        <meta property="og:title" content={`Informacion pokemon ${title}`} />
        <meta
          property="og:description"
          content={`Pokemon description del pokemon ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <NavbarUI />

      <main style={{ maxWidth: "1400px", width: "95%", marginInline: "auto" }}>
        {children}
      </main>
    </>
  );
};
