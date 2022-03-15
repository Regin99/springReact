import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import "./style.css";
import { store } from "../../redux/store";
import { loginThunk } from "../../redux/actions/auth";

const LoginPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
  const isFetching = useSelector((state) => state.auth.isFetching);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch(loginThunk(login, password));
    setLogin("");
    setPassword("");
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return isFetching ? (
    <Loader />
  ) : (
    <form className="login_form">
      <label>
        Login:
        <input
          type="text"
          value={login}
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </label>
      <input type="submit" value="Login" onClick={handleSubmit} />
    </form>
  );
};

export default LoginPage;
