import axios from 'axios';

const API = "http://localhost:3500"

export const getPeliculas = async () => {
    try {
        const response = await axios.get(`${API}/peliculas`);
        return response.data;
    } catch (error) {
        console.error("Error fetching peliculas:", error);
        throw error;
    }
};

export const getPelicula = async (id) => {
    try {
        const response = await axios.get(`${API}/pelicula/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching pelicula with id ${id}:`, error);
        throw error;
    }
};

export const registerPelicula = async (pelicula) => {
    try {
        const response = await axios.post(`${API}/pelicula`, pelicula);
        return response.data;
    } catch (error) {
        console.error("Error creating pelicula:", error);
        throw error;
    }
};


export const deletePelicula = async (id) => {
    try {
        const response = await axios.delete(`${API}/pelicula/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting pelicula with id ${id}:`, error);
        throw error;
    }
};