import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import Page from "./components/Page/Page";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./utils/RequireAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
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
