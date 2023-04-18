export const Form = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <hr />

      <form>
        <input type="text" id="tarea" name="tarea" placeholder="Tarea" />
        <button type="submit">Añadir</button>
      </form>

      <h2>Mostrar Tareas</h2>
    </div>
  );
};
