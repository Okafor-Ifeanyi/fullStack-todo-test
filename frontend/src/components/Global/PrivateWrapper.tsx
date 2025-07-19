// components/PrivateRouteWrapper.tsx
import { type ReactElement, type ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import type { RootState } from '../../state/store';
import { toast } from 'sonner';

type Props = {
    component: ReactNode
}
  
const PrivateRouteWrapper = ({ component }: Props): ReactElement => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isLoggedIn);

  if (isAuthenticated) {
    toast.warning('Login to access this page')
    return <Navigate to="/login" replace />;
  }

  return <>{component}</>;
};

export default PrivateRouteWrapper;