import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";
import loadingGif from "../assets/loadTime.gif";

const PrivateRoutes = () => {
  const { user, isLoading } = useSelector(
    (state: RootState) => state.user.value
  );

  if (isLoading) return <img src={loadingGif} alt="Loading" />;

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
