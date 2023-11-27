import React, {useState} from 'react';
import { StyledPinballList, StyledList } from '../../Styles/StyledPinballList';
import PinballLocation from './PinballLocation';

const PinballList = ({ pinballLocations }) => {
  const { locations } = pinballLocations;
  
  const locationsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
   
  const startIndex = (currentPage - 1) * locationsPerPage;
  const endIndex = startIndex + locationsPerPage;


  const displayedLocations = locations.slice(startIndex, endIndex);

  return (
    <StyledPinballList>
      <h2>Pinball Locations</h2> 
      <StyledList>
        {displayedLocations.map((location) => (
          <PinballLocation location={location}/>
        ))}
      </StyledList>
      <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous Page
        </button>
        <span> Page {currentPage} </span>
        <button
          disabled={endIndex >= locations.length}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next Page
        </button>
    </StyledPinballList>
  );
};

export default PinballList;