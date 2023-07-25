import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ActiveMissions from '../components/ActiveMissions';

const mockStore = configureMockStore();

test('renders active missions correctly', () => {
  const mockMissions = [
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

  ];

  const store = mockStore({
    missions: {
      missions: mockMissions,
    },
  });

  const { getByText, queryByText } = render(
    <Provider store={store}>
      <ActiveMissions />
    </Provider>,
  );

  expect(getByText('Mission 1')).toBeInTheDocument();

  expect(queryByText('Mission 2')).not.toBeInTheDocument();
});
