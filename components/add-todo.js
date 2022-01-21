import { HStack, Input, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

export default function AddTodo({ addTodo }) {
  const toast = useToast();
  function handleSubmit(e) {
    e.preventDefault();
    const todo = {
      id: Math.random(),
      title: content,
    };
    if (!content) {
      toast({
        title: "Error",
        description: "Please enter a todo",
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "top-right",
      });
    } else {
      addTodo(todo);
      setContent("");
      toast({
        title: "Success",
        description: "Todo added",
        status: "success",
        isClosable: true,
        duration: 3000,
        position: "top-right",
      });
    }
  }

  const [content, setContent] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt={8}>
        <Input
          type={"text"}
          variant={"filled"}
          placeholder="Add your todo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type={"submit"} colorScheme={"pink"} px={8}>
          Add
        </Button>
      </HStack>
    </form>
  );
}
