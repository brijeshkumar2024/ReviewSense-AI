import { Navigate } from 'react-router-dom';
import useAuthStore from '../hooks/useAuthStore';

const ProtectedRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
  const token = useAuthStore((state) => state.token);
  return token ? children : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
