import {
  HStack,
  Button,
  IconButton,
  useColorModeValue,
  useColorMode,
  Container,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const { toggleColorMode } = useColorMode();
  return (
    <Container
      display="flex"
      maxW="container.md"
      wrap="wrap"
      align="center"
      justify="space-between"
      mb={8}
    >
      {/* <Flex align="center" mr={5}> */}
      <NextLink href="/" passHref>
        <Button>Home</Button>
      </NextLink>
      {/* </Flex> */}
      <Spacer />
      <NextLink href="/login" passHref>
        <Button mr={4}>Login</Button>
      </NextLink>
      <IconButton
        icon={useColorModeValue(<FaMoon />, <FaSun />)}
        isRound="true"
        size={"md"}
        onClick={toggleColorMode}
      />
    </Container>
  );
}
