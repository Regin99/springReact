import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);

  if (!isAuthenticated) {
    return <Navigate to={{ pathname: "/login" }} />;
  }
  return children;
};

export default RequireAuth;
