import React from 'react';

const ActionList = ({ actions, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Actions List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Action</th>
            <th>Date</th>
            <th>Points</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {actions.map(action => (
            <tr key={action.id}>
              <td>{action.id}</td>
              <td>{action.action}</td>
              <td>{action.date}</td>
              <td>{action.points}</td>
              <td>
                <button onClick={() => onEdit(action)}>Edit</button>
                <button onClick={() => onDelete(action.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActionList;