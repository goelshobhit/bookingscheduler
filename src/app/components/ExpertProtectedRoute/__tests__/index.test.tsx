import * as React from 'react';
import { render } from '@testing-library/react';

import { ExpertProtectedRoute } from '..';

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

describe('<ExpertProtectedRoute  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ExpertProtectedRoute />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
