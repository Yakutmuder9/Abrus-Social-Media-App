import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  return (

    localStorage.getItem("authToken") ? (
      <Outlet/>
    ) : (
      <Navigate to="/login" replace={true} />
    )
  );
};

export default PrivateRoute;


// import { Navigate, Route } from "react-router-dom";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         localStorage.getItem("authToken") ? (
//           <Component {...props} />
//         ) : (
//           <div>Hill</div>
//           // <Navigate to="/login" replace={true} />
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;
