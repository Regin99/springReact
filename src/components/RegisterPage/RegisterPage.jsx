import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import { connect } from "react-redux";
import "./style.css";
import { signUp } from "../../redux/actions/signUp";

const RegisterPage = ({ isAuthenticated, isFetching, signUp, errors }) => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const handleInput = (e) => {
    switch (e.target.name) {
      case "userName":
        setUserName(e.target.value);
        break;
      case "firstName":
        setFirstName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "repeatPassword":
        setRepeatPassword(e.target.value);
        break;
      case "age":
        setAge(e.target.value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(userName, firstName, lastName, age, password, repeatPassword);
  };

  return isFetching ? (
    <Loader />
  ) : (
    <form className="signup_form">
      <div className="centered-container"></div>
      <div className="name-container">
        <label>
          First name:
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleInput}
          />
          <div className="error">{errors?.firstName}</div>
        </label>

        <label>
          Last name:
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleInput}
          />
          <div className="error">{errors?.lastName}</div>
        </label>
      </div>
      <label>
        Username:
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={handleInput}
        />
        <div className="error">{errors?.userName}</div>
      </label>
      <label>
        Age:
        <input type="number" name="age" value={age} onChange={handleInput} />
        <div className="error">{errors?.age}</div>
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInput}
        />
        <div className="error">{errors?.password}</div>
      </label>
      <label>
        Repeat password:
        <input
          type="password"
          name="repeatPassword"
          value={repeatPassword}
          onChange={handleInput}
        />
        <div className="error">{errors?.repeatPassword}</div>
      </label>
      <input type="submit" onClick={handleSubmit} />
      <div className="error">{errors?.message}</div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isLoggedIn,
    isFetching: state.signup.isFetching,
    errors: state.signup.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (userName, firstName, lastName, age, password, repeatPassword) =>
      dispatch(
        signUp(userName, firstName, lastName, age, password, repeatPassword)
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
