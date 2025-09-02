import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getAllActions = () => api.get('/actions/');
export const createAction = (actionData) => api.post('/actions/', actionData);
export const updateAction = (id, actionData) => api.put(`/actions/${id}/`, actionData);
export const deleteAction = (id) => api.delete(`/actions/${id}/`);

export default api;