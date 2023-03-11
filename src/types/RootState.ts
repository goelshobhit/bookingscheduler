import { DashboardState } from 'app/pages/Dashboard/types';
import { LoginState } from 'app/pages/Login/types';
import { ExpertDashboardState } from 'app/pages/ExpertDashboard/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  dashboard?: DashboardState;
  login?: LoginState;
  expertDashboard?: ExpertDashboardState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
