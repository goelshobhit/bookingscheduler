/**
 *
 * LoadingPage
 *
 */
import React, { memo } from 'react';
import { LoaderStyle } from './styles';

export const LoadingPage = memo(() => {
  return (
    <>
      <LoaderStyle />
      <div className="preloader">
        <div className="load-1"></div>
        <div className="load-2"></div>
        <div className="load-3"></div>
        <div className="load-4"></div>
        <div className="load-5"></div>
      </div>
    </>
  );
});
