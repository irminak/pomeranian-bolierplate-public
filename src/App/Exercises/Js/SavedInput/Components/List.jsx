import React from 'react';

export const List = () => {
  const users = [
    { nick: 'Janusz', id: 1 },
    { nick: 'Martyna', id: 2 },
    { nick: 'Stefan', id: 3 },
  ];
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.nick}</li>
      ))}
    </ul>
  );
};
