import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Missions from '../components/Missions';
import { FetchMissions } from '../redux/missions/missionsThunk';

const mockStore = configureMockStore([thunk]);

test('renders missions component correctly', async () => {
  const store = mockStore({
    missions: {
      missions: [
        {
          missionId: 'mission_1',
          missionName: 'Mission 1',
          description: 'Description for Mission 1',
          reserved: true,
        },
        {
          missionId: 'mission_2',
          missionName: 'Mission 2',
          description: 'Description for Mission 2',
          reserved: false,
        },

      ],
    },
  });

  const { getByText } = render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );

  await store.dispatch(FetchMissions());

  expect(getByText('Mission 1')).toBeInTheDocument();
  expect(getByText('Mission 2')).toBeInTheDocument();
});
