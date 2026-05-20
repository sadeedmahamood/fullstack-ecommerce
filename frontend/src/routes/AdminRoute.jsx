// import { Navigate } from "react-router-dom";

// function AdminRoute({ children }) {

//   const token = localStorage.getItem("token");

//   const isAdmin =
//     localStorage.getItem("is_admin") === "true";

//   // NOT LOGGED IN
//   if (!token) {

//     return <Navigate to="/login" />;

//   }

//   // NOT ADMIN
//   if (!isAdmin) {

//     return <Navigate to="/products" />;

//   }

//   return children;
// }

// export default AdminRoute;

import { Navigate } from "react-router-dom";

function AdminRoute({
  children
}) {

  const token =
    localStorage.getItem(
      "access"
    );

  const isAdmin =
    localStorage.getItem(
      "is_admin"
    ) === "true";

  // NOT LOGGED IN
  if (!token) {

    return (
      <Navigate to="/login" />
    );

  }

  // NOT ADMIN
  if (!isAdmin) {

    return (
      <Navigate to="/products" />
    );

  }

  return children;

}

export default AdminRoute;