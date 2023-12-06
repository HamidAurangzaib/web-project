import axios from 'axios';

const url= "http://localhost:5000";

export const addUsers = async (addusers) =>{
   console.log("post api reached at frontend");
   return await axios.post(`${url}/signup`,addusers);


}
export const getUsers = async () =>{
   console.log("get api at frontend");
   return await axios.get(`${url}/admin`);
}
// Assuming you have something like this in your Service/api module
export const updateUser = async (userId, updatedUserData) => {
   try {
     const response = await axios.put(`${url}/admin/${userId}`, updatedUserData);
     return response.data;
   } catch (error) {
     throw error;
   }
 };
 
 

   
 

