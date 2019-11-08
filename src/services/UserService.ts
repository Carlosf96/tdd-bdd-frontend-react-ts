import { User } from "../entities/User";

export interface IUserService {
  getList: () => Promise<User[]>;
  getUserById: (id: string) => Promise<User>;
  createUser: (userData: User) => Promise<User>;
  updateUser: (id: string, user: User) => Promise<User>;
  deleteUser: (id: string) => Promise<User>;
}
