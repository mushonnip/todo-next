import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../navbar";

function Main({ children, title }) {
  return (
    <Box as={"main"}>
      <Head>
        <title>{title} | Todo App</title>
      </Head>
      <Navbar />
      <Container pt={16}>{children}</Container>
    </Box>
  );
}

export default Main;
