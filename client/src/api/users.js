import axios from 'axios';
import { API } from './urlAPI';

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API}/api/cuentas/usuarios`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export const getUser = async (id) => {
  try {
    const response = await axios.get(`${API}/api/cuentas/usuarios/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    return null;
  }
};

export const registerUser = async (user) => {
  try {
    const response = await axios.post(`${API}/api/cuentas/usuarios`, user);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    return null;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API}/api/cuentas/usuarios/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting user with id ${id}:`, error);
    return null;
  }
};

export const updateUser = async (user,id) => {
  try {
    const response = await axios.put(`${API}/api/cuentas/usuarios/${id}`, user);
    return response.data;
  } catch (error) {
    console.error(`Error updating user with id ${id}:`, error);
    return null;
  }
}

