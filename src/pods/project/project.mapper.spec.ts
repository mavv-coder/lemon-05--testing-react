import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('project mapper spec', () => {
  it('Should return a clone object using apiModel interface', () => {
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

  it('Should return a clone object using apiModel interface without "externalId" optional property in Project interface', () => {
    // Arrange
    const modelData: viewModel.Project = {
      id: 'hbo',
      name: 'Mike',
      comments: 'hello',
      isActive: true,
      employees: [{ id: 'hbo2', isAssigned: false, employeeName: 'Maria' }],
    };
    const apiData: apiModel.Project = {
      id: 'hbo',
      name: 'Mike',
      comments: 'hello',
      isActive: true,
      employees: [{ id: 'hbo2', isAssigned: false, employeeName: 'Maria' }],
    };

    // Act
    const result = mapProjectFromApiToVm(modelData);

    // Assert
    expect(result).toEqual(apiData);
  });

  it('Should return a clone object using apiModel interface without "comments" optional property in Project interface', () => {
    // Arrange
    const modelData: viewModel.Project = {
      id: 'hbo',
      name: 'Mike',
      externalId: 'hboExternal',
      isActive: true,
      employees: [{ id: 'hbo2', isAssigned: false, employeeName: 'Maria' }],
    };
    const apiData: apiModel.Project = {
      id: 'hbo',
      name: 'Mike',
      externalId: 'hboExternal',
      isActive: true,
      employees: [{ id: 'hbo2', isAssigned: false, employeeName: 'Maria' }],
    };

    // Act
    const result = mapProjectFromApiToVm(modelData);

    // Assert
    expect(result).toEqual(apiData);
  });

  it('Should return a clone object using apiModel interface without "isAssigned" optional property in EmployeeSummary interface', () => {
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

  it('Should return a clone empty object using apiModel if receives "undefined"', () => {
    // Arrange
    const modelData: viewModel.Project = undefined;
    const apiData: apiModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(modelData);

    // Assert
    expect(result).toEqual(apiData);
  });

  it('Should return a clone empty object using apiModel if receives "null"', () => {
    // Arrange
    const modelData: viewModel.Project = null;
    const apiData: apiModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(modelData);

    // Assert
    expect(result).toEqual(apiData);
  });
});
