import * as React from "react";
import { Button } from "../../shared/atoms/Button";

export interface IUserFormProps {
  onSubmit: (event: React.FormEvent) => void;
  register: (instance: HTMLInputElement) => void;
}

export const AddUserForm: React.FC<IUserFormProps> = ({ onSubmit, register }) => {
  return (
    <div>
      <form id="createUserForm" onSubmit={onSubmit}>
        <label>
          First Name:
          <input
            name="firstName"
            id="createUserForm-UserName"
            type="text"
            style={{
              border: '.5'
            }}
            required
            ref={register}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            id="createUserForm-UserName"
            type="text"
            required
            ref={register}
          />
        </label>
        <label>
          Age:
          <input
            name="age"
            id="createUserForm-UserName"
            type="text"
            required
            ref={register}
          />
        </label>

        <Button>CREATE</Button>
      </form>
    </div>
  );
};