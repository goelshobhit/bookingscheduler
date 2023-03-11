import * as React from 'react';
import { render } from '@testing-library/react';

import { UserDashboard } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<UserDashboard  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<UserDashboard />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
