import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import Page from "./components/Page/Page";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./utils/RequireAuth";
import { checkAuth } from "./redux/actions/checkAuth";
import { useEffect } from "react";
import { store } from "./redux/store";

function App() {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.dispatch(checkAuth());
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<RegisterPage />} />
        <Route
          path="/"
          exact
          element={
            <RequireAuth>
              <Page />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
