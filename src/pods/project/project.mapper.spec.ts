import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('project mapper spec', () => {
  it('Should return a clone object using apiModel interface', () => {
    // Arrange
    const modelData: apiModel.Project = {
      id: 'hbo',
      name: 'Mike',
      externalId: 'hboExternal',
      comments: 'hello',
      isActive: true,
      employees: [{ id: 'hbo2', isAssigned: false, employeeName: 'Maria' }],
    };
    const apiData: viewModel.Project = {
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
    const modelData: apiModel.Project = {
      id: 'hbo',
      name: 'Mike',
      comments: 'hello',
      isActive: true,
      employees: [{ id: 'hbo2', isAssigned: false, employeeName: 'Maria' }],
    };
    const apiData: viewModel.Project = {
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
    const modelData: apiModel.Project = {
      id: 'hbo',
      name: 'Mike',
      externalId: 'hboExternal',
      isActive: true,
      employees: [{ id: 'hbo2', isAssigned: false, employeeName: 'Maria' }],
    };
    const apiData: viewModel.Project = {
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
    const modelData: apiModel.Project = {
      id: 'hbo',
      name: 'Mike',
      externalId: 'hboExternal',
      comments: 'hello',
      isActive: true,
      employees: [{ id: 'hbo2', isAssigned: false, employeeName: 'Maria' }],
    };
    const apiData: viewModel.Project = {
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
    const modelData: apiModel.Project = undefined;
    const apiData: viewModel.Project = {
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
    const modelData: apiModel.Project = null;
    const apiData: viewModel.Project = {
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

  it('Should not break down if some of the received properties are "null"', () => {
    // Arrange
    const modelData: apiModel.Project = {
      id: null,
      name: null,
      externalId: null,
      comments: null,
      isActive: null,
      employees: [{ id: null, isAssigned: null, employeeName: null }],
    };
    const apiData: viewModel.Project = {
      id: null,
      name: null,
      externalId: null,
      comments: null,
      isActive: null,
      employees: [{ id: null, isAssigned: null, employeeName: null }],
    };

    // Act
    const result = mapProjectFromApiToVm(modelData);

    // Assert
    expect(result).toEqual(apiData);
  });

  it('Should not break down if some of the received properties are "undefined"', () => {
    // Arrange
    const modelData: apiModel.Project = {
      id: undefined,
      name: undefined,
      externalId: undefined,
      comments: undefined,
      isActive: undefined,
      employees: [
        { id: undefined, isAssigned: undefined, employeeName: undefined },
      ],
    };
    const apiData: viewModel.Project = {
      id: undefined,
      name: undefined,
      externalId: undefined,
      comments: undefined,
      isActive: undefined,
      employees: [
        { id: undefined, isAssigned: undefined, employeeName: undefined },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(modelData);

    // Assert
    expect(result).toEqual(apiData);
  });

  it('Should not break down if employees is "null', () => {
    // Arrange
    const modelData: apiModel.Project = {
      id: null,
      name: null,
      externalId: null,
      comments: null,
      isActive: null,
      employees: null,
    };
    const apiData: viewModel.Project = {
      id: null,
      name: null,
      externalId: null,
      comments: null,
      isActive: null,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(modelData);

    // Assert
    expect(result).toEqual(apiData);
  });

  it('Should not break down if employees is "undefined', () => {
    // Arrange
    const modelData: apiModel.Project = {
      id: undefined,
      name: undefined,
      externalId: undefined,
      comments: undefined,
      isActive: undefined,
      employees: undefined,
    };
    const apiData: viewModel.Project = {
      id: undefined,
      name: undefined,
      externalId: undefined,
      comments: undefined,
      isActive: undefined,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(modelData);

    // Assert
    expect(result).toEqual(apiData);
  });
});
