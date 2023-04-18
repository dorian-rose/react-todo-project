export const Entry = ({ todo }) => {
  console.log(todo);
  return (
    <>
      <article>
        <h3>{todo.tarea}</h3>
        <p>{todo.description}</p>
      </article>
    </>
  );
};
