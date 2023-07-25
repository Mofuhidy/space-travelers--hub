import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  it('Navbar navigation links work correctly', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    const rocketsLink = screen.getByText('Rockets');
    expect(rocketsLink).toMatchSnapshot();
  });

  it('Navbar navigation links work correctly', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    const myprofileLink = screen.getByText('My Profile');
    expect(myprofileLink).toMatchSnapshot();
  });
});
