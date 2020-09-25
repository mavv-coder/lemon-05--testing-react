import React from 'react';
import { render, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';

describe('spinner component spec', () => {
  it('should be displayed when "promiseInProgress" is "true"', () => {
    // Arrange
    const promiseInProgress = true;

    // Act
    render(<SpinnerComponent />);

    const element = screen.getByRole('status');
    // Assert
    expect(element).toBeInTheDocument();
  });
});
