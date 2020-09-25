import { renderHook, act } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { Lookup } from 'common/models';

describe('confirmation dialog hook specs', () => {
  it('"isOpen" state should be "false" by default', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toBeFalsy();
  });

  it('"itemToDelete" state should be an empty object with "Lookup" interface by default', () => {
    // Arrange
    const testLookup: Lookup = {
      id: '',
      name: '',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.itemToDelete).toEqual(testLookup);
  });
});
