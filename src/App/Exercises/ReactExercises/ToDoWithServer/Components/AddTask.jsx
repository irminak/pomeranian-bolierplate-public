import React, { useState } from 'react';
import '../Styles/addTask.css';

const INITIAL_STATE = {
  title: '',
  task: '',
};

const AddTask = ({ handleBack, updateData }) => {
  const [newTask, setNewTask] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;

    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3333/api/todo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: newTask.title,
        createdAt: new Date(),
        isDone: false,
        note: newTask.task,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        updateData(data);
        console.log('Response from server:', data);
        setNewTask(INITIAL_STATE);
      })
      .catch((err) => {
        console.log('error');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Tytuł</label>
        <input
          id="title"
          value={newTask.title}
          type="text"
          onChange={handleChange}
          placeholder="Szczepienie kitku"
        />
      </div>
      <div>
        <label htmlFor="task">Treść</label>
        <textarea
          id="task"
          value={newTask.task}
          type="text"
          onChange={handleChange}
          placeholder='Notatka do zrobienia w stylu "Sprawdzić w książeczce zdrowia, kiedy Nala była ostatni raz szczepiona i umówić się z naszym weterynarzem. Dodatkowo pamiętać o ustaleniu drugiej wizyty za rok!!!'
        />
      </div>
      <div>
        <button onClick={() => handleBack(false)}>Cofnij</button>
        <button type="submit">Zapisz</button>
      </div>
    </form>
  );
};

export default AddTask;
