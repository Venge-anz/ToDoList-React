import { useState } from "react";

export function Table() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  //AÑADIR TAREA
  function addTask(e) {
    e.preventDefault;

    if (newTask === "" || newTask === undefined) {
      setError("No puede estar vacio");

      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
      setNewTask("");
      setTask([...task, newTask]);
    }
  }
  //ELIMINAR TAREA
  //Mirar bien el filter
  function deleteTask(index) {
    const updateTask = task.filter((_, i) => i !== index);
    setTask(updateTask);
  }

  return (
    <>
      <main>
        <div className="encabezado">
          <h2>To Do List</h2>

          {/* Cambiar fallos */}
          <input
            id="task-input"
            onChange={handleInputChange}
            type="text"
            value={newTask}
          ></input>
          <input
            onClick={addTask}
            className="btn-add"
            type="submit"
            value="Add"
          />
        </div>
        <h3>Tasks List</h3>

        {/* //Mapear         */}

        <div className="tabla">
          <ul>
            {task.map((tarea, index) => (
              <li key={index} className="tarea">
                <input id={`check-${index}`} type="checkbox" />
                <label htmlFor={`check-${index}`} className="texto-tarea">
                  {tarea}
                </label>
                <div className="acciones">
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
          <p className="error">{error}</p>
        </div>
      </main>
    </>
  );
}
