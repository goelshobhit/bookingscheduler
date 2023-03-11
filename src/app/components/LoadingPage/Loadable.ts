/**
 *
 * Asynchronously loads the component for LoadingPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const LoadingPage = lazyLoad(
  () => import('./index'),
  module => module.LoadingPage,
);
