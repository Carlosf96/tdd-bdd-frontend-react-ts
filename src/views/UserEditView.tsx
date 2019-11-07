import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import { User, user } from "../entities/User";
import { UserService } from "../services/userServices";
import useForm from "react-hook-form";
const userService = UserService();

export const UserEditView = () => {
  const [ UserDetails , setUserDetails] = useState<User>(user());
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any, e: Event) => {
    (async () => {
      const id = data._id;
      const userEdit = data;
      console.log(userEdit, "user edit object");
      setUserDetails(userEdit);
      await userService.updateUser(String(id), userEdit);
      console.log("User updated");
    })();
  };
  const handleDelete = (e: any) => {
    (async()=>{
    const id = UserDetails._id;
    console.log(id, 'User id')
    })();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
          <label>Enter ID: </label>
          <input
            id="id"
            name="uuid"
            placeholder="id"
            ref={register}
            style={{
              border: "none",
              blockSize: "20px"
            }}
          />
          <label>Enter firstName: </label>
          <input
            id="firstName"
            name="firstName"
            placeholder="First Name"
            ref={register}
            style={{
              border: "none",
              blockSize: "20px"
            }}
          />
          <label>Enter lastName: </label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            ref={register}
            style={{
              border: "none",
              blockSize: "20px"
            }}
          />
          <button
            type="submit"
            style={{
              border: "none",
              blockSize: "20px"
            }}
          >
            Edit
          </button>
      </form>
      <button
          onClick={handleDelete}
          style={{
            border: "none",
            blockSize: "20px"
          }}
        >
          Delete
        </button>
    </div>
  );
};
