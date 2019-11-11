import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserRouter } from "./Users/Router";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/">
          <UserRouter />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
