import React from "react";
import { Route, Switch } from "react-router";
import { observer } from "mobx-react";

// Components
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CategoryList from "./components/CategoryList";
import RecipeList from "./components/RecipeList";
// Style
import { GlobalStyle } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/recipes">
          <RecipeList />
        </Route>
        <Route path="/categories">
          <NavBar />
          <CategoryList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default observer(App);
