import { Navigate, Outlet } from "react-router-dom";
import useRedirectLoggedOutUser from "../../components/services/useRedirectLoggedOutUser";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";


const PrivateRoute =  () => {
  useRedirectLoggedOutUser("/login");
  const isLoggedIn = useSelector(selectIsLoggedIn);
 
  return (
    
    isLoggedIn? (
      <Outlet/>
    ) : (
      <Navigate to="/login" replace={true} />
    )
    
  );
};

export default PrivateRoute;

