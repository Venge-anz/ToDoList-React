import { useState } from "react";

export function Table() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState();

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask(e) {
    e.preventDefault;
    setTask([...task, newTask]);
    setNewTask("");
  }

  //Mirar bien el filter
  function deleteTask(index) {
    const updateTask = task.filter((_, i) => i !== index);
    setTask(updateTask);

    console.log(updateTask);
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
            value={newTask || ""}
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
                  <button>Edit</button>
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
