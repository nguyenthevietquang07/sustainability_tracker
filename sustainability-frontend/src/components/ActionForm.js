import React, { useState, useEffect } from 'react';

const ActionForm = ({ onSubmit, editingAction, onCancel }) => {
  const [formData, setFormData] = useState({
    action: '',
    date: '',
    points: ''
  });

  useEffect(() => {
    if (editingAction) {
      setFormData({
        action: editingAction.action,
        date: editingAction.date,
        points: editingAction.points
      });
    } else {
      setFormData({
        action: '',
        date: '',
        points: ''
      });
    }
  }, [editingAction]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!editingAction) {
      setFormData({ action: '', date: '', points: '' }); // Clear form on create
    }
  };

  return (
    <div>
      <h2>{editingAction ? 'Edit Action' : 'Add New Action'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Action Name:</label>
          <input
            type="text"
            name="action"
            value={formData.action}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Points:</label>
          <input
            type="number"
            name="points"
            value={formData.points}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">
          {editingAction ? 'Update Action' : 'Add Action'}
        </button>
        {editingAction && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default ActionForm;