import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserListView } from "./views/UserListView";
import { UserDetailsView } from "./views/UserDetailsView";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <UserListView />
        </Route>
        <Route path="/:id">
          <UserDetailsView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
