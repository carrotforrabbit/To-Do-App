import "./_todoItem.scss";

export default function TodoItem({ item }) {
  return <div className="list-item">{item.value}</div>;
}
