import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Mission from '../components/MyMission';

const mockStore = configureMockStore();

test('renders Mission component correctly', () => {
  const mission = {
    missionId: 'mission_123',
    missionName: 'Test Mission',
    description: 'This is a test mission.',
    reserved: true,
  };

  const store = mockStore({
    missions: {
      missions: [],
      activeMissions: [],
      isLoading: false,
    },
  });

  const { asFragment, getByText } = render(
    <Provider store={store}>
      <Mission mission={mission} />
    </Provider>,
  );

  const missionNameElement = getByText(mission.missionName);
  const descriptionElement = getByText(mission.description);
  const activeMemberElement = getByText('Active Member');
  const leaveMissionButton = getByText('Leave Mission');

  expect(asFragment()).toMatchSnapshot();
  expect(missionNameElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(activeMemberElement).toBeInTheDocument();
  expect(leaveMissionButton).toBeInTheDocument();
});

test('Mission component is in the document', () => {
  const mission = {
    missionId: 'mission_123',
    missionName: 'Test Mission',
    description: 'This is a test mission.',
    reserved: true,
  };

  const store = mockStore({
    missions: {
      missions: [],
      activeMissions: [],
      isLoading: false,
    },
  });

  const { getByText } = render(
    <Provider store={store}>
      <Mission mission={mission} />
    </Provider>,
  );

  const missionNameElement = getByText(mission.missionName);
  const descriptionElement = getByText(mission.description);
  const activeMemberElement = getByText('Active Member');
  const leaveMissionButton = getByText('Leave Mission');

  expect(missionNameElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(activeMemberElement).toBeInTheDocument();
  expect(leaveMissionButton).toBeInTheDocument();
});
