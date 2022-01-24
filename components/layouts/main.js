import { Box, Container, Head } from "@chakra-ui/react";
import Navbar from "../navbar";

function Main({ children, title }) {
  return (
    <Box as={"main"}>
      <Head>
        <title>
          {title} | {process.env.REACT_APP_NAME}
        </title>
      </Head>
      <Navbar />
      <Container>{children}</Container>
    </Box>
  );
}

export default Main;
