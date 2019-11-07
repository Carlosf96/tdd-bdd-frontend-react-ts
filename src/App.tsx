import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserListView } from "./views/UserListView";
import { UserDetailsView } from "./views/UserDetailsView";
import { UserEditView } from './views/UserEditView';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <UserListView />
        </Route>
        <Route path="/:id">
          <UserDetailsView />
          <UserEditView/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
