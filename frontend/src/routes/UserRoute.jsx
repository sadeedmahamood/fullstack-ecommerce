import { Navigate } from "react-router-dom";

function UserRoute({ children }) {

  const token = localStorage.getItem("access");

  if (!token || token === "undefined") {

    return <Navigate to="/login" replace />;

  }

  return children;
}

export default UserRoute;