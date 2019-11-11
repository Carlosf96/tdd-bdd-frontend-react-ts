import React from "react";
import { Route, Switch } from "react-router-dom";
import { UserListViewFactory } from "../views/UserListView";
import { AxiosUserService } from "../services/AxiosUserService";
import { UserDetailsViewFactory } from "../views/UserDetailsView";
import { AddUserViewFactory } from "../views/AddUserView";
import { UserEditViewFactory } from "../views/UserEditView";

const axiosUserService = AxiosUserService();
const UserListView = UserListViewFactory(axiosUserService);
const UserDetailsView = UserDetailsViewFactory(axiosUserService);
const AddUserView = AddUserViewFactory(axiosUserService);
const UserEditView = UserEditViewFactory(axiosUserService);

export const UserRouter: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <UserListView />
      </Route>

      <Route path="/add">
        <AddUserView />
      </Route>

      <Route exact path="/:id">
        <UserDetailsView />
      </Route>

      <Route path="/:id/edit">
        <UserEditView />
      </Route>
    </Switch>
  );
};