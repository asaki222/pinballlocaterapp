const PINBALL_MAP_API_BASE_URL = 'https://pinballmap.com/api/v1';

const handleApiResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Pinball Map API error: ${errorData.error}`);
  }

  return response.json();
};


export const fetchPinballLocationsNearLatLon = async (latitude, longitude) => {
  const range = 5
  const adjustedSwLat =  latitude - (range/69)
  const adjustedNeLat = latitude + (1/69)
  const adjustedSwLon =  longitude - range/(69.172 * Math.cos(latitude * (Math.PI/180)))
  const adjustedNeLon = longitude + range/(69.172 * Math.cos(latitude * (Math.PI/180)))

  const response = await fetch(
    `${PINBALL_MAP_API_BASE_URL}/locations/within_bounding_box.json?swlat=${adjustedSwLat}&swlon=${adjustedSwLon}&nelat=${adjustedNeLat}&nelon=${adjustedNeLon}`
  );

  return handleApiResponse(response);
};