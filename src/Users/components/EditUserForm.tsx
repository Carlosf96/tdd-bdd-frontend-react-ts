import * as React from "react";
import { Button } from "../../shared/atoms/Button";

export interface IUserFormProps {
  onSubmit: (event: React.FormEvent) => void;
  register: (instance: HTMLInputElement) => void;
  handleDelete: () => void;
}

export const EditUserForm: React.FC<IUserFormProps> = ({ onSubmit, register, handleDelete }) => {
  return (
    <div>
      <form id="editUserForm" onSubmit={onSubmit}>
        <label>
          First Name:
          <input
            name="firstName"
            id="editUserForm-UserName"
            type="text"
            required
            ref={register}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            id="editUserForm-UserName"
            type="text"
            required
            ref={register}
          />
        </label>
        <label>
          Age:
          <input
            name="age"
            id="editUserForm-UserName"
            type="text"
            required
            ref={register}
          />
        </label>

        <Button>Edit</Button>
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