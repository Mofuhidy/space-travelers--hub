import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Rockets from '../pages/Rockets';
import store from '../redux/store';

describe('Testing Rockets page', () => {
  it('Should render Rockets page', () => {
    const rocketsPage = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(rocketsPage).toMatchSnapshot();
  });
});
