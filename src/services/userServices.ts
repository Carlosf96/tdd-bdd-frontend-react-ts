import axios from "axios";
import { User } from "../entities/User";

export interface IUserService {
  getList: () => Promise<User[]>;
  getOneById: (id: string) => Promise<User>;
  createUser: (userData: object) => Promise<User>;
}

export const UserService = (): IUserService => {
  const createUser = async (userData: object) => {
    const res = await axios.post('http://localhost:8000/api/users/', userData);
    return Promise.resolve(res.data);
  }
  const getList = async () => {
    const res = await axios.get("http://localhost:8000/api/users/");
    return Promise.resolve(res.data);
  };

  const getOneById = async (id: string) => {
    const res = await axios.get(`http://localhost:8000/api/users/${id}`);
    return Promise.resolve(res.data);
  };

  return {
    getList,
    getOneById,
    createUser,
  };
};