import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import jwtDecode from "jwt-decode";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#7986cb",
      main: "#3f51b5",
      dark: "#303f9f",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  console.log("decodedToken", decodedToken);
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar />

          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/signup" component={Signup}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
