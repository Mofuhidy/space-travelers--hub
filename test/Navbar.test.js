import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../src/components/Navbar';

describe('Navbar testing cases', () => {
  it('Navbar renders without errors', () => {
    render(<Navbar />);
  });

  it('Navbar renders the correct links', () => {
    const { getByText } = render(<Navbar />);
    const rocketsLink = getByText('Rockets');
    const missionsLink = getByText('Missions');
    const profileLink = getByText('My Profile');

    expect(rocketsLink).toBeInTheDocument();
    expect(missionsLink).toBeInTheDocument();
    expect(profileLink).toBeInTheDocument();
  });
});
