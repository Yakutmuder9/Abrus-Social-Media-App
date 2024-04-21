import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice";
import { jwtDecode } from "jwt-decode";

const useAuth = () => {
  const token = useSelector(selectCurrentToken);

  let userId;
  let active = false;
  if (token) {
    const decoded = jwtDecode(token);
    const { userId, active } = decoded.UserInfo;

    return { userId, active };
  }

  return { userId, active };
};
export default useAuth;
