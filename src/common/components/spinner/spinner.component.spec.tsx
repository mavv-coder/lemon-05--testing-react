import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { render, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import { usePromiseTracker } from 'react-promise-tracker';

describe('spinner component spec', () => {
  it('should be displayed when "promiseInProgress" is "true"', () => {
    // Arrange
    const { result } = renderHook(() => usePromiseTracker());
    result.current.promiseInProgress = true;
    expect(result.current.promiseInProgress).toEqual(true);

    // Act
    render(<SpinnerComponent />);

    // Assert
  });
});
