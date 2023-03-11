/**
 *
 * UserProtectedRoute
 *
 */
import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { Navbar } from '../Navbar';

interface Props {
  isLoggedInfo: any;
  children: any;
}

export function UserProtectedRoute({ isLoggedInfo, children }: Props) {
  if (!isLoggedInfo) {
    return <Navigate to="/" replace />;
  }
  return <Navbar isLoggedInfo={isLoggedInfo}>{children}</Navbar>;
}
