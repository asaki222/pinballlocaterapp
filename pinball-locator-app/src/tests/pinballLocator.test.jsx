import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import PinballLocator from '../PinballLocator/PinballLocator';
import { fetchLocations } from '../utils/locationFunctions';

jest.mock('../utils/locationFunctions', () => ({
  fetchLocations: jest.fn(),
}));

describe('PinballLocator', () => {
  test('renders PinballLocator component', () => {
    render(<PinballLocator />);
    expect(screen.getByLabelText('Latitude:')).toBeInTheDocument();
    expect(screen.getByLabelText('Longitude:')).toBeInTheDocument();
    expect(screen.getByText('Near Me')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();

  });

  test('calls fetchLocations with correct parameters on search button click', async () => {
    const latitude = 37.7749;
    const longitude = -122.4194;
    const setLatitude = jest.fn();
    const setLongitude = jest.fn();
    const setLoading = jest.fn();
    const setError = jest.fn();
    const setPinballLocations = jest.fn();

    render(
      <PinballLocator
        latitude={latitude}
        longitude={longitude}
        setLatitude={setLatitude}
        setLongitude={setLongitude}
        setLoading={setLoading}
        setError={setError}
        setPinballLocations={setPinballLocations}
      />
    );

    fireEvent.change(screen.getByLabelText('Latitude:'), { target: { value: ' 37.7' } });
    fireEvent.change(screen.getByLabelText('Longitude:'), { target: { value: '-122.5' } });
    fireEvent.click(screen.getByText('Search'));

    await waitFor(() => {
      expect(fetchLocations).toHaveBeenCalledWith(
        'search',
        37.7749,
        -122.4194,
        setLoading,
        setLongitude,
        setLatitude,
        setPinballLocations,
        setError
      );
    });
  });

});
