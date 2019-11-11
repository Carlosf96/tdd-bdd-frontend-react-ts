import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import useForm from "react-hook-form";
import { IUserService } from "../services/UserService";
import { EditUserForm } from '../Users/components/EditUserForm';

export const UserEditViewFactory = (userService: IUserService) => {
  const UserEditView = () => {
    const { register, handleSubmit } = useForm();
    const { id } = useParams();
    const history = useHistory();

    const onSubmit = (data: any) => {
      (async () => {
        const userEdit = data;
        console.log(userEdit, "user edit object");
        await userService.updateUser(String(id), userEdit);
        console.log("User updated");
        history.replace('/');
      })();
    };
  
    const handleDelete = () => {
      (async()=>{
      console.log(id, 'User id')
      await userService.deleteUser(String(id));
      console.log('User Has been deleted');
      history.replace('/');
      })();
    }
  
    return (
      <div>
        <EditUserForm onSubmit={handleSubmit(onSubmit)} register={register} handleDelete={handleDelete}/>
      </div>
    );
  };
  return UserEditView;  
}