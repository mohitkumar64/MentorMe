import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  login: (username: string, password: string) =>
    api.post('/auth/login', { username, password }),
  register: (data: any) => api.post('/auth/register', data),
  googleAuth: (token: string) => api.post('/auth/google', { token }),
};

export const mentorAPI = {
  getProfile: () => api.get('/mentor/profile'),
  updateProfile: (data: any) => api.put('/mentor/profile', data),
  getSessions: () => api.get('/mentor/sessions'),
  getReviews: () => api.get('/mentor/reviews'),
};

export const menteeAPI = {
  getProfile: () => api.get('/mentee/profile'),
  updateProfile: (data: any) => api.put('/mentee/profile', data),
  getSessions: () => api.get('/mentee/sessions'),
  getMentors: () => api.get('/mentee/mentors'),
};

export const sessionAPI = {
  create: (data: any) => api.post('/sessions', data),
  update: (id: string, data: any) => api.put(`/sessions/${id}`, data),
  cancel: (id: string) => api.delete(`/sessions/${id}`),
};

export const reviewAPI = {
  create: (data: any) => api.post('/reviews', data),
  update: (id: string, data: any) => api.put(`/reviews/${id}`, data),
  delete: (id: string) => api.delete(`/reviews/${id}`),
};

export default api; 