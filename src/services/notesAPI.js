import axios from 'axios'

const API_URL = "https://ovnxhzdhqdgnykgmgldf.supabase.co/rest/v1//notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92bnhoemRocWRnbnlrZ21nbGRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5NDQ4ODEsImV4cCI6MjA5NjUyMDg4MX0.wHtl-6mnF5gjciQw98iz1R3RwrEW71t97MguQ2TEgJ0"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data

    },

    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}
