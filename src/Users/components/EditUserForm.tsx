import * as React from "react";
import { SaveButton } from "../atoms/SaveButton";


export interface IUserFormProps {
  firstName: string;
  lastName: string;
  age: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickSave: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const EventForm: React.FC<IUserFormProps> = ({ firstName, lastName, age, onChange, onClickSave }) => {
  return (
    <div>
      <form id="createUserForm">
        <label>
          First Name:
          <input
            name="firstName"
            id="createUserForm-UserName"
            type="text"
            required
            onChange={onChange}
            value={firstName}
          />
          </label>
          <label>
          Last Name:
          <input
            name="LastName"
            id="createUserForm-UserName"
            type="text"
            required
            onChange={onChange}
            value={lastName}
          />
          </label>
          <label>
          Age:
          <input
            name="Age"
            id="createUserForm-UserName"
            type="text"
            required
            onChange={onChange}
            value={age}
          />
        </label>

        <SaveButton onClick={onClickSave}>SAVE</SaveButton>
      </form>
    </div>
  );
};