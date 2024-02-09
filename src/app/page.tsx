import Image from "next/image";
import { request, gql } from "graphql-request";
import { CreateTodo } from "../components/CreateTodo";
import { TodoList } from "@/components/TodoList";
import styles from "./page.module.css";

const document = gql`
  {
    todos {
      id
      text
      done
    }
  }
`;

export default async function Home() {
  const { todos }: any = await request(
    "http://localhost:3000/graphql",
    document
  );

  return (
    <main className={styles.TodosWrapper}>
      <CreateTodo />
      <hr />
      <TodoList todos={todos} />
    </main>
  );
}
