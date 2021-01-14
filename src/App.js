import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ContactSales from "./pages/ContactSales";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Enterprise from "./pages/Enterprise";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/enterprise">
          <Enterprise />
        </Route>
        <Route path="/contact-sales">
          <ContactSales />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
