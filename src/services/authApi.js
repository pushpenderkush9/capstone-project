import API from "./api"

// Register
export const registerUser = async (userData) => {
 const response = await API.post("/auth/register", userData)
 return response.data
}

// Login
export const loginUser = async (loginData) => {
 const response = await API.post("/auth/login", loginData)
 return response.data
}