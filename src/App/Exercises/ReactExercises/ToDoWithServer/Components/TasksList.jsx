import React from 'react';

import Task from './Task';
import '../Styles/taskList.css';

const TasksList = (props) => {
  function formatDate(addDate) {
    const date = new Date(addDate);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');

    return `${day}.${month}.${year}, ${hours}:${minutes}`;
  }


  const handleRemove = () => {
    props.data.map((todo) => {
      fetch(`http://localhost:3333/api/todo/${todo.id}`, {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const updatedData = props.data.filter((task) => task.id !== todo.id);
          props.updateData(updatedData);
        })
        .catch((err) => {
          console.log('error');
        });
    });
  };

  const handleCheck = () => {
    props.data.map((todo) => {
      fetch(`http://localhost:3333/api/todo/${todo.id}/markAsDone`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: todo.title,
          note: todo.task,
          isDone: true,
          doneDate: new Date(),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // const isDone = props.data.filter((task) => task.id === todo.id);
          // console.log(doneTask);
        })
        .catch((err) => {
          console.log('error');
        });
    });
  };

  // const handleEdit = () => {
  //   props.data.map((todo) => {
  //     fetch(`http://localhost:3333/api/todo/${todo.id}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         title: todo.title,
  //         note: todo.task,
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         const updatedData = props.data.filter((task) => task.id !== todo.id);
  //         props.updateData(updatedData);
  //       })
  //       .catch((err) => {
  //         console.log('error');
  //       });
  //   });
  // };


  return (
    <div className="list">
      <ul>
        {props.data.map((todo) => (
          <Task
            title={todo.title}
            author={todo.author}
            note={todo.note}
            addDate={formatDate(todo.createdAt)}

            removeTask={handleRemove}
            // editTas={handleEdit}
            markAsChecked={handleCheck}
            isDone={todo.isDone}

          />
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
