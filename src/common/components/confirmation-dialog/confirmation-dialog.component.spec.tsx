import React, { HtmlHTMLAttributes } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import DialogContent from '@material-ui/core/DialogContent';

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
    render(
      <ConfirmationDialogComponent {...props}>
        <DialogContent>
          <span>test children</span>
        </DialogContent>
      </ConfirmationDialogComponent>
    );

    const dialogElement = screen.getByRole('dialog');
    const dialogContentElement = screen.getByText('test children');
    const closeButtonElement = screen.getByRole('button', {
      name: props.labels.closeButton,
    });
    const acceptButtonElement = screen.getByRole('button', {
      name: props.labels.acceptButton,
    });

    // Assert
    expect(dialogElement).toBeInTheDocument();
    expect(dialogContentElement).toBeInTheDocument();
    expect(closeButtonElement).toBeInTheDocument();
    expect(acceptButtonElement).toBeInTheDocument();
  });
});
