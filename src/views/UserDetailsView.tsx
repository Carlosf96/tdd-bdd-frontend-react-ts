import * as React from "react";
import { useParams } from "react-router-dom";
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
      <div>
        <p>id: {UserDetails._id}</p>
        <p>firstName: {UserDetails.firstName}</p>
        <p>lastName: {UserDetails.lastName}</p>
      </div>
    );
  };
  return UserDetailsView;
}
