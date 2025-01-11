import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import useRole from "../hooks/useRole";

const SellerRoute = ({ children }) => {
  const [role, isLoading] = useRole();
  const { user, loading } = useAuth();

  if (isLoading) return <LoadingSpinner />;
  if (role === "seller") return children;
  return <Navigate to='/dashboard' replace="true" />;
};

SellerRoute.propTypes = {
  children: PropTypes.element,
};

export default SellerRoute;
