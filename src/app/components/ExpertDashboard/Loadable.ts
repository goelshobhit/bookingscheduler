/**
 *
 * Asynchronously loads the component for ExpertDashboard
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ExpertDashboard = lazyLoad(
  () => import('./index'),
  module => module.ExpertDashboard,
);
