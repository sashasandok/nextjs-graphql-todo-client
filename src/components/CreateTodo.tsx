"use client";
import React from "react";
import { request, gql } from "graphql-request";

export const CreateTodo = () => {
  const createNewTodo = async () => {
    const mutation = gql`
      mutation {
        createTodo(createTodoInput: { text: "text", done: false }) {
          id
          text
          done
        }
      }
    `;

    const variables = {
      text: "TODO TEXT",
      done: false,
    };

    const data = await request(
      "http://localhost:3000/graphql",
      mutation,
      variables
    );
    return data;
  };

  return (
    <div>
      CreateTodo <button onClick={createNewTodo}>create todo</button>
    </div>
  );
};
