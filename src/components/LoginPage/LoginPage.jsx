import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { store } from "../../redux/store";
import { LOGIN_ACTION } from "../../redux/actions";
import { useSelector } from "react-redux";
import "./style.css";

const LOGIN = "admin";
const PASSWORD = "1234";

const LoginPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login === LOGIN && password === PASSWORD) {
      store.dispatch({
        type: LOGIN_ACTION,
        payload: {
          isLoggedIn: true,
          user: {
            login: LOGIN,
            password: PASSWORD,
          },
        },
      });
      navigate("/");
    } else {
      setLogin("");
      setPassword("");
      alert("Wrong login or password");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, []);

  return (
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
