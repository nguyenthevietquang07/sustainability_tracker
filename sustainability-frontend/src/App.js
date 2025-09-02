import React, { useState, useEffect } from 'react';
import ActionList from './components/ActionList';
import ActionForm from './components/ActionForm';
import { getAllActions, createAction, updateAction, deleteAction } from './services/api';
import './App.css';

function App() {
  const [actions, setActions] = useState([]);
  const [editingAction, setEditingAction] = useState(null);

  useEffect(() => {
    fetchActions();
  }, []);

  const fetchActions = async () => {
    try {
      const response = await getAllActions();
      setActions(response.data);
    } catch (error) {
      console.error('Error fetching actions:', error);
    }
  };

  const handleCreate = async (actionData) => {
    try {
      await createAction(actionData);
      fetchActions(); // Refresh the list
    } catch (error) {
      console.error('Error creating action:', error);
    }
  };

  const handleUpdate = async (id, actionData) => {
    try {
      await updateAction(id, actionData);
      setEditingAction(null);
      fetchActions(); // Refresh the list
    } catch (error) {
      console.error('Error updating action:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteAction(id);
      fetchActions(); // Refresh the list
    } catch (error) {
      console.error('Error deleting action:', error);
    }
  };

  return (
    <div className="App">
      <h1>Sustainability Actions Tracker</h1>
      
      <ActionForm 
        onSubmit={editingAction ? (data) => handleUpdate(editingAction.id, data) : handleCreate}
        editingAction={editingAction}
        onCancel={() => setEditingAction(null)}
      />
      
      <ActionList 
        actions={actions}
        onEdit={setEditingAction}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;