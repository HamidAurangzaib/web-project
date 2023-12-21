import axios from 'axios';

const url = "https://web-project-prul.vercel.app";

export const addUsers = async (addusers) => {
  console.log("post api reached at frontend");
  return await axios.post(`${url}/signup`, addusers);
};

export const getUsers = async () => {
  console.log("get api at frontend");
  return await axios.get(`${url}/admin`);
};

export const getUsernew = async () => {
  console.log("get api at reached to get rishtass from db");
  return await axios.get(`${url}/rishtaas`);
};

export const updateUser = async (userId, updatedUserData) => {
  try {
    const response = await axios.put(`${url}/admin/${userId}`, updatedUserData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Authentication function
export const authenticateUser = async (credentials) => {
  try {
    const response = await axios.post(`${url}/authenticate`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};
