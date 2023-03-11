import * as React from 'react';
import { render } from '@testing-library/react';

import { ExpertDashboard } from '..';

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

describe('<ExpertDashboard  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ExpertDashboard />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
