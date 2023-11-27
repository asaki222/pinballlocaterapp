import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for expect.stringContaining
import App from '../App';
import { PinballProvider } from '../context/PinballContext';
import { LoadingErrorProvider } from '../context/LoadingErrorContext';



describe('App Component', () => {
  it('renders without errors', () => {
    const { getByText} = render(<PinballProvider> <LoadingErrorProvider><App /></LoadingErrorProvider> </PinballProvider>);

    expect(getByText('Pinball Locator App')).toBeInTheDocument();
  });

});
