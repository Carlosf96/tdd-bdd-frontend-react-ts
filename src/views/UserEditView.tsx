import React from 'react';
import { useParams } from "react-router-dom";
import { User, user } from "../entities/User";
import { UserService } from "../services/userServices";

const userService = UserService();

export const UserEditView = () => {
  const { id } = useParams();
  const [UserDetails, setUserDetails] = React.useState<User>(user());

  React.useEffect(() => {
    (async () => {
      const userData = await userService.getOneById(String(id));
      setUserDetails(userData);
    })();
  });


  return (
    <div>
      <form>
        <label >
          <p>Enter First Name</p>
          <input id="first" name="firstName" placeholder="enter first name"></input>
        </label>
      </form>
    </div>
  )
}
