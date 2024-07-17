import axios from "axios";

export const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  baseURL: import.meta.env.VITE_APP_BACKEND_URL + "/api",
  // timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// ℹ️ Add request interceptor to send the authorization header on each subsequent request after login
axiosIns.interceptors.request.use((config) => {
  // Retrieve token from localStorage
  const token = JSON.parse(localStorage.getItem("accessToken") || "null");

  // If token is found
  if (token) {
    // Get request headers and if headers is undefined assign blank object
    config.headers = config.headers || {};

    // Set authorization header
    // ℹ️ JSON.parse will convert token to string
    config.headers.Authorization = token ? `Bearer ${token}` : "";
  }

  // Return modified config
  return config;
});

// // ℹ️ Add response interceptor to handle 401 response
// axiosIns.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     console.log(error);
//     // Handle error
//     if (error.response) {
//       if (error.response.status === 401) {
       
//       } else {
//         return Promise.reject(error);
//       }
//     }
//     console.log(error);
//   }
// );

export default axiosIns;
