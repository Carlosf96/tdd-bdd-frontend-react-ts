import * as React from "react";
import { useParams, Link } from "react-router-dom";
import { User, user } from "../entities/User";
import { IUserService } from '../services/UserService';

export const UserDetailsViewFactory = (userService: IUserService) => {
  const UserDetailsView = () => {
    const { id } = useParams();
    const [UserDetails, setUserDetails] = React.useState<User>(user());
  
    React.useEffect(() => {
      (async () => {
        const UserData = await userService.getUserById(String(id));
        setUserDetails(UserData);
      })();
    });
  
    return (
      <div id='container'>
        <p>id: {UserDetails._id}</p>
        <p>firstName: {UserDetails.firstName}</p>
        <p>lastName: {UserDetails.lastName}</p>
        <Link to={`/${UserDetails._id}/edit`}>
          <p>Edit</p>
        </Link>
      </div>
    );
  };
  return UserDetailsView;
}
