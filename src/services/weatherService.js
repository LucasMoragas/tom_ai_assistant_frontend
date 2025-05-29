import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const weatherService = {
    async getWeatherData() {
        try {
            const response = await axios.get(`${API_URL}/weather`);
            return response.data;
        } catch (error) {
            console.error('Error getting weather data:', error);
            throw error;
        }
    }
}; 