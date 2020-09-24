import React, { HtmlHTMLAttributes } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('confirmation dialog component specs', () => {
  it('should be displayed when it feeds "isOpen" property with "true" value', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'test title',
      labels: {
        closeButton: 'test close btn',
        acceptButton: 'test accept btn',
      },
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const dialogElement = screen.getByRole('dialog');
    const closeButtonElement = screen.getByRole('button', {
      name: props.labels.closeButton,
    });
    const acceptButtonElement = screen.getByRole('button', {
      name: props.labels.acceptButton,
    });

    // Assert
    expect(dialogElement).toBeInTheDocument();
    expect(closeButtonElement).toBeInTheDocument();
    expect(acceptButtonElement).toBeInTheDocument();
  });
});
