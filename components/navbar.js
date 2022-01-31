import {
  HStack,
  Button,
  IconButton,
  useColorModeValue,
  useColorMode,
  Flex,
  useDisclosure,
  Box,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useSession, SignIn, SignOut, signOut } from "next-auth/react";

const Links = ["Nav1", "Nav2", "Nav3"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: session } = useSession();
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
      position={"fixed"}
      as={"nav"}
      zIndex={1}
      css={{ backdropFilter: "blur(10px)" }}
      w={"100%"}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <NextLink href={"/"} passHref>
            <Link
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
            >
              Todo
            </Link>
          </NextLink>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Button onClick={toggleColorMode} mr={2}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          {session ? (
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} src={session.user.image} />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <Link href="/api/auth/signout">
                  <MenuItem>
                    <Box
                      color={"red.300"}
                      onClick={(e) => {
                        e.preventDefault;
                        signOut;
                      }}
                    >
                      Sign Out
                    </Box>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          ) : (
            <Link href="/api/auth/signin">
              <Button
                variant={"solid"}
                colorScheme={"teal"}
                size={"sm"}
                mr={4}
                onClick={(e) => {
                  e.preventDefault;
                  SignIn;
                }}
              >
                Login
              </Button>
            </Link>
          )}
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
