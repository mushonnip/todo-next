import {
  Heading,
  IconButton,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import TodoList from "../components/todo-list";
import AddTodo from "../components/add-todo";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Home() {
  const initialTodos = [
    {
      id: 1,
      title: "Learn React",
    },
    {
      id: 2,
      title: "Learn Chakra UI",
    },
    {
      id: 3,
      title: "Learn Next.js",
    },
  ];

  const [todos, setTodos] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("todos")) || initialTodos;
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const { toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <IconButton
        icon={useColorModeValue(<FaMoon />, <FaSun />)}
        isRound="true"
        size={"lg"}
        alignSelf={"flex-end"}
        onClick={toggleColorMode}
      />
      <Heading
        mb={8}
        fontWeight={"extrabold"}
        size={"2xl"}
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip={"text"}
      >
        Todo Application
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}
