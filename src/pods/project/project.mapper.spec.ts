import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('project mapper spec', () => {
  it('Should return a clone object using apiModel after mapper func', () => {
    // Arrange
    const modelData: viewModel.Project = {
      id: 'hbo',
      name: 'Mike',
      externalId: 'hboExternal',
      comments: 'hello',
      isActive: true,
      employees: [{ id: 'hbo2', isAssigned: false, employeeName: 'Maria' }],
    };
    const apiData: apiModel.Project = {
      id: 'hbo',
      name: 'Mike',
      externalId: 'hboExternal',
      comments: 'hello',
      isActive: true,
      employees: [{ id: 'hbo2', isAssigned: false, employeeName: 'Maria' }],
    };

    // Act
    const result = mapProjectFromApiToVm(modelData);

    // Assert
    expect(result).toEqual(apiData);
  });
});
