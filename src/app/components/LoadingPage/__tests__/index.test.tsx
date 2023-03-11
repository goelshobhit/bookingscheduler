import * as React from 'react';
import { render } from '@testing-library/react';

import { LoadingPage } from '..';

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

describe('<LoadingPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<LoadingPage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
