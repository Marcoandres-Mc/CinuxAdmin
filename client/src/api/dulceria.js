import axios from 'axios';

const API = import.meta.env.VITE_API_URL;


export const getDulces = async () => {
    try {
        const response = await axios.get(`${API}/api/dulces`);
        return response.data;
    } catch (error) {
        console.error("Error fetching peliculas:", error);
        return [];
    }
};

export const getDulce = async (id) => {
    try {
        const response = await axios.get(`${API}/api/dulce/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching pelicula with id ${id}:`, error);
        return [];
    }
}

export const registerDulce = async (dulce) => {
    try {
        const response = await axios.post(`${API}/api/dulces`, dulce);
        return response.data;
    } catch (error) {
        console.error("Error creating pelicula:", error);
        throw error;
    }
};

export const updateDulce = async (dulce) => {
    try {
        const response = await axios.put(`${API}/api/dulces/${dulce._id}`, dulce);
        return response.data;
    } catch (error) {
        console.error(`Error updating pelicula with id ${dulce._id}:`, error);
        throw error;
    }
}

export const deleteDulce = async (id) => {
    try {
        const response = await axios.delete(`${API}/api/dulces/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting pelicula with id ${id}:`, error);
        throw error;
    }
}


