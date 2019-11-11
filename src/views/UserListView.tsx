import React from "react";
import { Link } from "react-router-dom";
import { User } from "../entities/User";
import { IUserService } from '../services/UserService';

export const UserListViewFactory = (userService: IUserService) => {
  const UserListView = () => {
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
    if(!Users.length){
      return <div>No users found!</div>
    }
    return (
      <div className="App">
        <div>
          <Link to={'/add'}>
            ADD
          </Link>
        </div>
        {Users.map(user => {
          return (
            <Link key={user._id} to={`/${user._id}`}>
              <div>
              {user.firstName + ' ' + user.lastName}
              <Link key={user._id} to={`/${user._id}/edit`}>
              <p>Edit</p>
              </Link>
              </div>
            </Link>
          );
        })}
      </div>
    );
  };

  return UserListView;
}