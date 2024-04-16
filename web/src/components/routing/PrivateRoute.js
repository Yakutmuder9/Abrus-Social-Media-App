import { Navigate, Outlet } from "react-router-dom";
import { Route } from "react-router-dom";

const PrivateRoute = ({ element, isAuthenticated, ...rest }) => {
 console.log(element, isAuthenticated);
  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

// const PrivateRoute = () => {

//   return (

//     localStorage.getItem(localStorage.key("name")) ? (
//       <Outlet />
//     ) : (

//       <Navigate to="/login" replace={true} />

//     )

//   );
// };

export default PrivateRoute;
