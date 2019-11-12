import * as React from "react";
import { Button } from "../../shared/atoms/Button";
import './userForm.css';
export interface IUserFormProps {
  onSubmit: (event: React.FormEvent) => void;
  register: (instance: HTMLInputElement) => void;
}

export const AddUserForm: React.FC<IUserFormProps> = ({ onSubmit, register }) => {
  return (
    <div className='flex-container'>
      <form onSubmit={onSubmit}>
        <label className='cool-label'>
          First Name:
          <input
            name="firstName"
            type="text"
            required
            ref={register}
            className='cool-input'
          />
        </label>
        <label className='cool-label'>
          Last Name:
          <input
            name="lastName"
            type="text"
            required
            ref={register}
            className='cool-input'
          />
        </label>
        <label className='cool-label'>
          Age:
          <input
            name="age"
            type="text"
            required
            ref={register}
            className='cool-input'
          />
        </label>

        <Button
        className='nice-button
        '>CREATE</Button>
      </form>
    </div>
  );
};