import React from 'react';
import { render, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import * as promiseTracker from 'react-promise-tracker/lib/trackerHook';

describe('spinner component spec', () => {
  it('should be displayed when "promiseInProgress" is "true"', () => {
    // Arrange
    jest
      .spyOn(promiseTracker, 'usePromiseTracker')
      .mockImplementation(() => ({ promiseInProgress: true }));

    // Act
    render(<SpinnerComponent />);
    const element = screen.getByRole('status');

    // Assert
    expect(element).toBeInTheDocument();
  });
});
