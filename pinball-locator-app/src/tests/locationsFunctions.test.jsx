import { fetchPinballLocationsNearLatLon } from "../utils/pinballApi";

const mockData = {
  locations: [
    {
      id: 1,
      name: 'Pinball Location 1',
      street: '123 Main St',
      city: 'Cityville',
      state: 'CA',
      zip: '12345',
      phone: '555-1234',
      description: 'A great pinball location',
      machine_names_first: 'Machine 1, Machine 2',
    },
    {
      id: 2,
      name: 'Pinball Location 2',
      street: '456 Elm St',
      city: 'Townsville',
      state: 'NY',
      zip: '54321',
      phone: '555-5678',
      description: 'Another awesome pinball spot',
      machine_names_first: 'Machine A, Machine B',
    },
  ],
};

describe('fetchPinballLocationsNearLatLon', () => {
  beforeEach(() => {
    global.fetch = jest.fn(); 
  });

  it('fetches pinball locations successfully', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    await fetchPinballLocationsNearLatLon(37.75, -122.44);

  expect(global.fetch).toHaveBeenCalledWith(
    expect.stringContaining('https://pinballmap.com/api/v1/locations/within_bounding_box.json')
  );

  });

  it('handles Pinball Map API error response', async () => {
    global.fetch.mockRejectedValueOnce({ status: 400, message: 'Pinball Map API error' });
  
    const latitude = 37.7749;
    const longitude = -122.4194;
  
    try {
      await fetchPinballLocationsNearLatLon(latitude, longitude);
    } catch (error) {
      expect(error.message).toContain('Pinball Map API error');
    }
  
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('https://pinballmap.com/api/v1/locations/within_bounding_box.json')
    );
  });
  
  
});
