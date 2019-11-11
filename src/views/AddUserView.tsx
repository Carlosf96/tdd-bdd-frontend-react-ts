import React from "react";
import { IUserService } from "../services/UserService";
import { useHistory } from "react-router";
import { AddUserForm } from "../Users/components/AddUserForm";
import useForm from 'react-hook-form';

export const AddUserViewFactory = (userService: IUserService) => {
  const AddUserView = () => {
    
    const { register, handleSubmit } = useForm(); 
    const history = useHistory();
    const onSubmit = (data: any) => {
      (async () => {
        const newUser = data
        await userService.createUser(newUser);
        console.log(data);
        history.replace("/");
      })();
    };


    return (
      <div>
        bzzz
        <AddUserForm onSubmit={handleSubmit(onSubmit)} register={register} />
      </div>
    );
  };

  return AddUserView;
};