import {
  VStack,
  HStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";

export default function TodoList({ todos, deleteTodo }) {
  if (!todos.length) {
    return (
      <Badge colorScheme={"green"} p={4} m={4} borderRadius={"lg"}>
        No todos yay!
      </Badge>
    );
  }

  return (
    <VStack
      p={4}
      divider={<StackDivider />}
      borderColor={"gray.500"}
      borderWidth={2}
      borderRadius={"lg"}
      w={"100%"}
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
      alignItems={"stretch"}
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.title}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrashAlt />}
            isRound="true"
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
}
