import { useDispatch } from "react-redux";
import { login } from "../redux/slice/authSlice";

const LoginFoam = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ email, password }));
  };
};
