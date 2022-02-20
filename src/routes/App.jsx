import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/main.scss";

import Login from "../components/containers/Login";
import RecoveryPassword from "../components/containers/RecoveryPassword";
import NotFound from "../components/containers/NotFound";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/recovery-password" element={<RecoveryPassword />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
