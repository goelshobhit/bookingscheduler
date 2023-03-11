/**
 *
 * LogInRoute
 *
 */
import * as React from 'react';
import { isEmpty, some, includes } from 'lodash';
import { Navigate } from 'react-router-dom';

interface Props {
  isLoggedInfo: any;
  children: any;
}

export function LogInRoute({ isLoggedInfo, children }: Props) {
  if (!isEmpty(isLoggedInfo)) {
    const isUser = some(['CUSTOMER'], el =>
      includes(isLoggedInfo?.identifier, el),
    );

    if (isUser) {
      return <Navigate to="/user-dashboard" replace />;
    }

    return <Navigate to="/expert-dashboard" replace />;
  }
  return children;
}
