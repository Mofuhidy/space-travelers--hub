import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import MyProfile from '../pages/Myprofile';
import store from '../redux/store';

describe('Testing MyProfile page', () => {
  it('Should render myProfile page', () => {
    const rocketsPage = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    expect(rocketsPage).toMatchSnapshot();
  });
});
