import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import { connect } from "react-redux";
import "./style.css";
import { loginThunk } from "../../redux/actions/auth";

const LoginPage = ({ isAuthenticated, isFetching, loginThunk }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleInput = (e) => {
    switch (e.target.name) {
      case "login":
        setLogin(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginThunk(login, password);
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
        <input type="text" name="login" value={login} onChange={handleInput} />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInput}
        />
      </label>
      <input type="submit" value="Login" onClick={handleSubmit} />
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isLoggedIn,
    isFetching: state.auth.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginThunk: (login, password) => dispatch(loginThunk(login, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
