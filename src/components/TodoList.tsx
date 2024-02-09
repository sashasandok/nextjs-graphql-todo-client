import React from "react";

export const TodoList = ({ todos }: any) => {
  return (
    <ul>
      {todos?.map((todo: any) => {
        return <li key={todo.id}>{todo.text}</li>;
      })}
    </ul>
  );
};
