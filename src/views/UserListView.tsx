import React from "react";
import { Link } from "react-router-dom";
import { User } from "../entities/User";
import { IUserService } from "../services/UserService";
import './userListView.css';

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
        className="container"
      >
        <h1 className='main-title'>
          Welcome
        </h1>
        <div className='users-section'>
          <Link to={"/add"} className='nice-button'>
            ADD
          </Link>
          {Users.map(user => {
            return (
              <div className='user-card'>
                <Link
                  key={user._id}
                  to={`/${user._id}`}
                >
                  {user.firstName + " " + user.lastName}
                  <Link
                    key={user._id}
                    to={`/${user._id}/edit`}
                    >
                    <p>Edit</p>
                  </Link>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return UserListView;
};
