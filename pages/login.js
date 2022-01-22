import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import Navbar from "../components/navbar";

export default function Login() {
  return (
    <VStack p={4}>
      <Navbar />
      <Flex
        w={"full"}
        align={"center"}
        justifyContent={"center"}
        // backgroundColor={"yellow"}
      >
        <Box p={8} borderWidth={4} borderRadius={"lg"} boxShadow={"lg"}>
          <Box textAlign={"center"}>
            <Heading>Login</Heading>
          </Box>
          <Box my={4} textAlign={"left"}>
            <form>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type={"email"} placeholder="Input your email" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input type={"password"} placeholder="Input your password" />
              </FormControl>
              <Button type="submit" mt={4}>
                Login
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </VStack>
  );
}
