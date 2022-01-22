import { Heading, VStack, useToast } from "@chakra-ui/react";
import TodoList from "../components/todo-list";
import AddTodo from "../components/add-todo";
import Navbar from "../components/navbar";
import useSWR, { useSWRConfig } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const toast = useToast();
  const { data: todos = [], error } = useSWR(
    process.env.NEXT_PUBLIC_HOST + "api/getTodos",
    fetcher
  );
  const { mutate, isValidating } = useSWRConfig();

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    mutate(process.env.NEXT_PUBLIC_HOST + "api/getTodos", newTodos, false);
    fetch(process.env.NEXT_PUBLIC_HOST + "api/deleteTodo/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      mutate(process.env.NEXT_PUBLIC_HOST + "api/getTodos");
      toast({
        title: "Success",
        description: "Todo deleted",
        status: "success",
        isClosable: true,
        duration: 3000,
        position: "top-right",
      });
    });
  }

  function addTodo(todo) {
    mutate(
      process.env.NEXT_PUBLIC_HOST + "api/getTodos",
      [...todos, todo],
      false
    );
    fetch(process.env.NEXT_PUBLIC_HOST + "api/createTodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }).then(() => {
      mutate(process.env.NEXT_PUBLIC_HOST + "api/getTodos");
      toast({
        title: "Success",
        description: "Todo added",
        status: "success",
        isClosable: true,
        duration: 3000,
        position: "top-right",
      });
    });
  }

  return (
    <VStack p={4} spacing={8}>
      <Navbar />
      <Heading
        fontWeight={"extrabold"}
        size={"2xl"}
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip={"text"}
      >
        Todo Application
      </Heading>
      {isValidating && <div>Validating...</div>}
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}
