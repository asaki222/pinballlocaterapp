
import PinballLocator from './PinballLocator/PinballLocator';
import LoadingSpinner from './PinballLocator/LoadingSpinner';
import PinballList from './PinballLocator/PinballList/PinballList';
import Footer from './PinballLocator/Footer';
import { StyledApp } from './Styles/StyledApp';
import ErrorComponent from './PinballLocator/ErrorComponent';
import { usePinballContext } from './context/PinballContext';
import { useLoadingError } from './context/LoadingErrorContext';

const App = () => {
  const { pinballData, setLatitude, setLongitude, setPinballLocations} = usePinballContext();
  const { loading, setLoading, error, setError } = useLoadingError();

  const {pinballLocations, latitude, longitude} = pinballData
  return (
    <StyledApp>
      <h1>Pinball Locator App</h1>
      <PinballLocator
        latitude={latitude}
        longitude={longitude}
        setLatitude={setLatitude} 
        setLongitude={setLongitude}
        setLoading={setLoading}
        setError={setError}
        setPinballLocations={setPinballLocations}
        />
      {loading && <LoadingSpinner />}
      {error !== '' && <ErrorComponent error={error} />}
      {pinballLocations.locations.length > 0 && (
        <PinballList pinballLocations={pinballLocations} />
      )}
      <Footer />
    </StyledApp>
  );
};

export default App;
