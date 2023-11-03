import { useState } from 'react';
import TasksList from './Components/TasksList';
import './Styles/style.css';
import AddTask from './Components/AddTask';

export const ToDoWithServer = () => {
  const [data, setData] = useState([]);
  const [addTask, setAddTask] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleLoadData = () => {
    setIsError(false);
    fetch('http://localhost:3333/api/todo')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setIsError(true);
      });
  };

  //   console.log(
  //     obj && obj.noteDetails && obj.noteDetails.author && obj.noteDetails.author
  //   );

  //   console.log(obj.noteDetails?.author?.length && obj.noteDetails.author);

  return (
    <div className="todo">
      {addTask ? (
        <>
          <h3>Edycja zadania.</h3>

          <AddTask handleBack={setAddTask} updateData={setData} />

        </>
      ) : (
        <>
          <h3>Tutaj znajdziesz listę swoich zadań</h3>
          <button className="add_button" onClick={() => setAddTask(true)}>
            +
          </button>

          <TasksList data={data} updateData={setData} />

          {isError && (
            <p className="error_message">
              Przepraszamy. Nie udało się pobrać listy zadań.
            </p>
          )}
          <button className="add" onClick={handleLoadData}>
            {isError ? 'Odświez widok' : 'Dodaj'}
          </button>{' '}
        </>
      )}
    </div>
  );
};
