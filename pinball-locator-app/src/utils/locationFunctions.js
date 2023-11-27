import { fetchPinballLocationsNearLatLon } from "./pinballApi"; 

const fetchLocations = async (
  action,
  latitude,
  longitude,
  setLoading,
  setLongitude,
  setLatitude,
  setPinballLocations,
  setError
) => {
  try {
    setLoading(true);
    let userLatitude;
    let userLongitude;
    if(action === "nearMe"){
      if (navigator.geolocation) {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
  
        userLatitude = position.coords.latitude;
        userLongitude = position.coords.longitude;
        setLatitude(userLatitude);
        setLongitude(userLongitude);

    }
    else if(action === "search"){
        userLatitude = latitude;
        userLongitude = longitude;
     }
    }
    
    const apiResults = await fetchPinballLocationsNearLatLon(userLatitude, userLongitude);
    setLoading(false);

    if (apiResults.errors) {
      setError(apiResults.errors);
    } else {
      setPinballLocations(apiResults);
    }

  } catch (error) {
    setError(error);
    setLoading(false);
  }
};


export { fetchLocations };
