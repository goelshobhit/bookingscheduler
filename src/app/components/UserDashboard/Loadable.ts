/**
 *
 * Asynchronously loads the component for UserDashboard
 *
 */

import { lazyLoad } from 'utils/loadable';

export const UserDashboard = lazyLoad(
  () => import('./index'),
  module => module.UserDashboard,
);
