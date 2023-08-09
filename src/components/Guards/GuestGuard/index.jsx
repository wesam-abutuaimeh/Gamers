import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PATHS } from '../../../router/PATHS';
import { ROLES } from '../../../constant/roles';
import { useAuthContext } from '../../../contexts/AuthContext';

const GuestGuard = () => {
  const { role } = useAuthContext();
  if (role === ROLES.USER)
    return <Navigate to={PATHS.Home} replace={true} />;
  if (role === ROLES.ADMIN)
    return <Navigate to={PATHS.ADMIN.ROOT} replace={true} />;
  return <Outlet />;
};

export default GuestGuard;
