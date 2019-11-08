import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserListViewFactory } from "./views/UserListView";
import { AxiosUserService } from './services/AxiosUserService';
import { UserDetailsViewFactory } from "./views/UserDetailsView";
import { UserEditView } from './views/UserEditView';

const UserDetailsView = UserDetailsViewFactory(AxiosUserService());
const UserListView = UserListViewFactory(AxiosUserService());

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <UserListView />
        </Route>
        <Route path="/:id">
          <UserDetailsView/>
          <UserEditView/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
