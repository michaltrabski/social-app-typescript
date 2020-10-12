import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import jwtDecode from "jwt-decode";
import { decode } from "punycode";
import { FirebaseIdToken } from "./const/const";

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

let authenticated: boolean;

interface MyToken {
  name: string;
  exp: number;
}
const token = localStorage[FirebaseIdToken];
if (token) {
  const decodedToken = jwtDecode<MyToken>(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login";
    localStorage.removeItem(FirebaseIdToken);
    authenticated = false;
  } else {
    authenticated = true;
  }
  console.log("authenticated = ", authenticated);
} else {
  console.log("authenticated = ", "no token");
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

              {/* protected rout component in 6:02:00 of tutorial  */}
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
