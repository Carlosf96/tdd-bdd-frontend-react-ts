import axios from "axios";
import { IUserService } from './UserService';

export const AxiosUserService = (): IUserService => {
  const createUser = async (userData: object) => {
    const res = await axios.post('http://localhost:8000/api/users/', userData);
    return Promise.resolve(res.data);
  }
  const getList = async () => {
    const res = await axios.get("http://localhost:8000/api/users/");
    return Promise.resolve(res.data);
  };

  const getUserById = async (id: string) => {
    const res = await axios.get(`http://localhost:8000/api/users/${id}`);
    return Promise.resolve(res.data);
  };
  const updateUser = async (id: string, user: object) => {
    const res = await axios.put(`http://localhost:8000/api/users/${id}`, user);
    return Promise.resolve(res.data);
  }
  const deleteUser = async (id: string) => {
    const res = await axios.delete(`http://localhost:8000/api/users/${id}`);
    return Promise.resolve(res.data);
  }


  return {
    getList,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };
};