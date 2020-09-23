import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('project mapper spec', () => {
  it('should return a clone object with viewModel interface', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: 'hbo',
      name: 'Mike',
      externalId: 'hboExternal',
      comments: 'hello',
      isActive: true,
      employees: [{ id: 'hbo2', isAssigned: false, employeeName: 'Maria' }],
    };
    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    const expectedResult: viewModel.Project = {
      id: 'hbo',
      name: 'Mike',
      externalId: 'hboExternal',
      comments: 'hello',
      isActive: true,
      employees: [{ id: 'hbo2', isAssigned: false, employeeName: 'Maria' }],
    };
    expect(result).toEqual(expectedResult);
  });

  it('should not break down if "externalId" optional property is not included in apiData', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: 'hbo',
      name: 'Mike',
      comments: 'hello',
      isActive: true,
      employees: [{ id: 'hbo2', isAssigned: false, employeeName: 'Maria' }],
    };
    const modelData: viewModel.Project = {
      id: 'hbo',
      name: 'Mike',
      comments: 'hello',
      isActive: true,
      employees: [{ id: 'hbo2', isAssigned: false, employeeName: 'Maria' }],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual(modelData);
  });

  it('should not break down if "comments" optional property is not included in apiData', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: 'hbo',
      name: 'Mike',
      externalId: 'hboExternal',
      isActive: true,
      employees: [{ id: 'hbo2', isAssigned: false, employeeName: 'Maria' }],
    };
    const modelData: viewModel.Project = {
      id: 'hbo',
      name: 'Mike',
      externalId: 'hboExternal',
      isActive: true,
      employees: [{ id: 'hbo2', isAssigned: false, employeeName: 'Maria' }],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual(modelData);
  });

  it('should not break down if "isAssigned" optional property within "employess" property is not included in apiData', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: 'hbo',
      name: 'Mike',
      externalId: 'hboExternal',
      comments: 'hello',
      isActive: true,
      employees: [{ id: 'hbo2', employeeName: 'Maria' }],
    };
    const modelData: viewModel.Project = {
      id: 'hbo',
      name: 'Mike',
      externalId: 'hboExternal',
      comments: 'hello',
      isActive: true,
      employees: [{ id: 'hbo2', employeeName: 'Maria' }],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual(modelData);
  });

  it('should return a clone empty object with viewModel interface if receiving "undefined"', () => {
    // Arrange
    const apiData: apiModel.Project = undefined;
    const modelData: viewModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual(modelData);
  });

  it('should return a clone empty object with viewModel interface if receiving "null"', () => {
    // Arrange
    const apiData: apiModel.Project = null;
    const modelData: viewModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual(modelData);
  });

  it('should not break down if some of the received properties are "null"', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: null,
      name: null,
      externalId: null,
      comments: null,
      isActive: null,
      employees: [{ id: null, isAssigned: null, employeeName: null }],
    };
    const modelData: viewModel.Project = {
      id: null,
      name: null,
      externalId: null,
      comments: null,
      isActive: null,
      employees: [{ id: null, isAssigned: null, employeeName: null }],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual(modelData);
  });

  it('should not break down if some of the received properties are "undefined"', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: undefined,
      name: undefined,
      externalId: undefined,
      comments: undefined,
      isActive: undefined,
      employees: [
        { id: undefined, isAssigned: undefined, employeeName: undefined },
      ],
    };
    const modelData: viewModel.Project = {
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
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual(modelData);
  });

  it('should return employees property as an empty array if employees initial value is "null"', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: null,
      name: null,
      externalId: null,
      comments: null,
      isActive: null,
      employees: null,
    };
    const modelData: viewModel.Project = {
      id: null,
      name: null,
      externalId: null,
      comments: null,
      isActive: null,
      employees: [],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual(modelData);
  });

  it('should return employees property as an empty array if employees initial value is "undefined"', () => {
    // Arrange
    const apiModel: apiModel.Project = {
      id: undefined,
      name: undefined,
      externalId: undefined,
      comments: undefined,
      isActive: undefined,
      employees: undefined,
    };
    const modelData: viewModel.Project = {
      id: undefined,
      name: undefined,
      externalId: undefined,
      comments: undefined,
      isActive: undefined,
      employees: [],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiModel);

    // Assert
    expect(result).toEqual(modelData);
  });

  it('should not break down if "employees" property received an empty array', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: 'hbo',
      name: 'Mike',
      externalId: 'hboExternal',
      comments: 'hello',
      isActive: true,
      employees: [],
    };
    const modelData: viewModel.Project = {
      id: 'hbo',
      name: 'Mike',
      externalId: 'hboExternal',
      comments: 'hello',
      isActive: true,
      employees: [],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual(modelData);
  });

  it('Should not break down if "employees" property received an array with "undefined"', () => {
    // Arrange
    const modelData: apiModel.Project = {
      id: 'hbo',
      name: 'Mike',
      externalId: 'hboExternal',
      comments: 'hello',
      isActive: true,
      employees: [undefined],
    };
    const apiData: viewModel.Project = {
      id: 'hbo',
      name: 'Mike',
      externalId: 'hboExternal',
      comments: 'hello',
      isActive: true,
      employees: [
        { id: undefined, isAssigned: undefined, employeeName: undefined },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(modelData);

    // Assert
    expect(result).toEqual(apiData);
  });

  it('Should not break down if employees is array with "null', () => {
    // Arrange
    const modelData: apiModel.Project = {
      id: 'hbo',
      name: 'Mike',
      externalId: 'hboExternal',
      comments: 'hello',
      isActive: true,
      employees: [
        null,
        { id: 'hbo2', isAssigned: false, employeeName: 'Maria' },
      ],
    };
    const apiData: viewModel.Project = {
      id: 'hbo',
      name: 'Mike',
      externalId: 'hboExternal',
      comments: 'hello',
      isActive: true,
      employees: [
        { id: undefined, isAssigned: undefined, employeeName: undefined },
        { id: 'hbo2', isAssigned: false, employeeName: 'Maria' },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(modelData);

    // Assert
    expect(result).toEqual(apiData);
  });
});
