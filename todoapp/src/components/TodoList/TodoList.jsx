import TodoItem from "../TodoItem/TodoItem";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import "./_todoList.scss";

export default function TodoList({ items }) {
  const { context, setContext } = useContext(MyContext);
  return (
    <div className="list-container">
      <ul>
        {context?.map((item) => (
          <li key={item.id}>
            <TodoItem item={item} key={item.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
