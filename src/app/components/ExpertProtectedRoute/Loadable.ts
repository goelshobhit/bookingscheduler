/**
 *
 * Asynchronously loads the component for ExpertProtectedRoute
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ExpertProtectedRoute = lazyLoad(
  () => import('./index'),
  module => module.ExpertProtectedRoute,
);
