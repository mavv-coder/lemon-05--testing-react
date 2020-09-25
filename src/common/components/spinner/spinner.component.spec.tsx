import React from 'react';
import { render, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import * as PromiseTracker from 'react-promise-tracker';

describe('spinner component spec', () => {
  it('should be displayed when "promiseInProgress" is "true"', () => {
    // Arrange
    jest
      .spyOn(PromiseTracker, 'usePromiseTracker')
      .mockImplementation(() => ({ promiseInProgress: true }));

    // Act
    render(<SpinnerComponent />);

    const element = screen.getByRole('status');
    // Assert
    expect(element).toBeInTheDocument();
  });
});
