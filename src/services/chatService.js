import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const chatService = {
    async sendMessage(message) {
        try {
            const response = await axios.post(`${API_URL}/chat`, {
                message: message
            });
            return response.data;
        } catch (error) {
            console.error('Error sending message:', error);
            throw error;
        }
    }
}; 