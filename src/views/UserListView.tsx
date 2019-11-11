import React from "react";
import { Link } from "react-router-dom";
import { User } from "../entities/User";
import { IUserService } from "../services/UserService";

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
    if (!Users.length) {
      return (
        <div>
          No users found!
          <Link to={"/add"}>ADD</Link>
        </div>
      );
    }
    return (
      <div 
      className="App"  
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}>
        <h1 
        style={{
          position: 'absolute',
        }}>Welcome</h1>
        <div 
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '75px 0px 0px 0px',
          justifyContent: 'space-evenly'
        }}>
          <Link to={"/add"}>ADD</Link>
        
        {Users.map(user => {
          return (
            <Link key={user._id} to={`/${user._id}`}>
              <div>
                {user.firstName + " " + user.lastName}
                <Link key={user._id} to={`/${user._id}/edit`}>
                  <p>Edit</p>
                </Link>
              </div>
            </Link>
          );
        })}
        </div>
      </div>
    );
  };

  return UserListView;
};