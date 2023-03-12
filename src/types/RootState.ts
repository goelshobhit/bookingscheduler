import { DashboardState } from 'app/pages/Dashboard/types';
import { LoginState } from 'app/pages/Login/types';
import { ExpertDashboardState } from 'app/pages/ExpertDashboard/types';
import { UserDashboardState } from 'app/pages/UserDashboard/types';
import { SignUpState } from 'app/pages/SignUp/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  dashboard?: DashboardState;
  login?: LoginState;
  expertDashboard?: ExpertDashboardState;
  userDashboard?: UserDashboardState;
  signUp?: SignUpState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
