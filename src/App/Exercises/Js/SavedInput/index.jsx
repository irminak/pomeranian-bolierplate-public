import React from 'react';
import { useState, useEffect } from 'react';
import './styles.css';

export const SavedInput = () => {
  const [value, setValue] = useState('');
  const [idCounter, setIdCounter] = useState(0);
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (value) {
      const newUser = { nick: value, id: idCounter };
      setUsers([...users, newUser]);
      setValue('');
      setIdCounter(idCounter + 1);
    }
  };
  const handleRemove = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  useEffect(() => {
    if (users.length === 0) return;
    // zapisz wartość count do localStorage na każdej zmianie stanu count
    localStorage.setItem('list-nicki', JSON.stringify(users));
    localStorage.setItem('list-nicki-index', idCounter);
  }, [users, idCounter]);

  useEffect(() => {
    const storedUsers = localStorage.getItem('list-nicki');
    const storedIdCounter = localStorage.getItem('list-nicki-index');

    if (storedIdCounter) {
      setIdCounter(Number(storedIdCounter));
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  return (
    <div className="savedinput">
      <div>
        <label>
          Nick
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <button onClick={handleClick}>Dodaj</button>
      </div>
      <div className="list">
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.nick}
              <span onClick={() => handleRemove(user.id)}>X</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
