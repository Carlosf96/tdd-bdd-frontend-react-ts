import React from "react";
import { Link } from "react-router-dom";
import { User } from "../entities/User";
import { UserService } from "../services/userServices";

const userService = UserService();

export const UserListView = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [Users, setUsers] = React.useState<User[]>([]);
  const [error, setError] = React.useState<Error | null>(null);
  
  React.useEffect(() => {
    (async () => {
      try {
        const users = await userService.getList();
        setUsers(users);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return <div>Is loading</div>;
  }

  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }
  console.log(Users);
  return (
    <div className="App">
      {Users.map(user => {
        return (
          <Link key={user._id} to={`/${user._id}`}>
            <div>{user.firstName + ' ' + user.lastName}</div>
          </Link>
        );
      })}
    </div>
  );
};