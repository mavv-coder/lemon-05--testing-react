import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('project mapper spec', () => {
  it('should return a clone object with "viewModel" interface', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: '01',
      name: 'Mike',
      externalId: 'test external id',
      comments: 'test comment',
      isActive: true,
      employees: [{ id: '02', isAssigned: false, employeeName: 'Jane' }],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual<viewModel.Project>({
      id: '01',
      name: 'Mike',
      externalId: 'test external id',
      comments: 'test comment',
      isActive: true,
      employees: [{ id: '02', isAssigned: false, employeeName: 'Jane' }],
    });
  });

  it('should not break down when "externalId" optional property is not included in apiData', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: '01',
      name: 'Mike',
      comments: 'test comment',
      isActive: true,
      employees: [{ id: '02', isAssigned: false, employeeName: 'Jane' }],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual<viewModel.Project>({
      id: '01',
      name: 'Mike',
      comments: 'test comment',
      isActive: true,
      employees: [{ id: '02', isAssigned: false, employeeName: 'Jane' }],
    });
  });

  it('should not break down when "comments" optional property is not included in apiData', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: '01',
      name: 'Mike',
      externalId: 'test external id',
      isActive: true,
      employees: [{ id: '02', isAssigned: false, employeeName: 'Jane' }],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual<viewModel.Project>({
      id: '01',
      name: 'Mike',
      externalId: 'test external id',
      isActive: true,
      employees: [{ id: '02', isAssigned: false, employeeName: 'Jane' }],
    });
  });

  it('should not break down when "isAssigned" optional property within "employess" property is not included in apiData', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: '01',
      name: 'Mike',
      externalId: 'test external id',
      comments: 'test comment',
      isActive: true,
      employees: [{ id: '02', employeeName: 'Jane' }],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual<viewModel.Project>({
      id: '01',
      name: 'Mike',
      externalId: 'test external id',
      comments: 'test comment',
      isActive: true,
      employees: [{ id: '02', employeeName: 'Jane' }],
    });
  });

  it('should return a clone empty object with "viewModel.Project" interface when receiving "undefined"', () => {
    // Arrange
    const apiData: apiModel.Project = undefined;

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual<viewModel.Project>({
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    });
  });

  it('should return a clone empty object with "viewModel.Project" interface when receiving "null"', () => {
    // Arrange
    const apiData: apiModel.Project = null;

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual<viewModel.Project>({
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    });
  });

  it('should not break down when some of the received properties are "null"', () => {
    // Arrange
    const apiData: apiModel.Project = {
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
    expect(result).toEqual<viewModel.Project>({
      id: null,
      name: null,
      externalId: null,
      comments: null,
      isActive: null,
      employees: [{ id: null, isAssigned: null, employeeName: null }],
    });
  });

  it('should not break down when some of the received properties are "undefined"', () => {
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

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual<viewModel.Project>({
      id: undefined,
      name: undefined,
      externalId: undefined,
      comments: undefined,
      isActive: undefined,
      employees: [
        { id: undefined, isAssigned: undefined, employeeName: undefined },
      ],
    });
  });

  it('should return "employees" property as an empty array when "employees" initial value is "null"', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: null,
      name: null,
      externalId: null,
      comments: null,
      isActive: null,
      employees: null,
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual<viewModel.Project>({
      id: null,
      name: null,
      externalId: null,
      comments: null,
      isActive: null,
      employees: [],
    });
  });

  it('should return "employees" property as an empty array when "employees" initial value is "undefined"', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: undefined,
      name: undefined,
      externalId: undefined,
      comments: undefined,
      isActive: undefined,
      employees: undefined,
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual<viewModel.Project>({
      id: undefined,
      name: undefined,
      externalId: undefined,
      comments: undefined,
      isActive: undefined,
      employees: [],
    });
  });

  it('should not break down when "employees" property received an empty array', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: '01',
      name: 'Mike',
      externalId: 'test external id',
      comments: 'test comment',
      isActive: true,
      employees: [],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual<viewModel.Project>({
      id: '01',
      name: 'Mike',
      externalId: 'test external id',
      comments: 'test comment',
      isActive: true,
      employees: [],
    });
  });

  it('"employees" property should return an object with "undefined" properties when it received an array with some "undefined" values', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: '01',
      name: 'Mike',
      externalId: 'test external id',
      comments: 'test comment',
      isActive: true,
      employees: [
        { id: '02', isAssigned: false, employeeName: 'Jane' },
        undefined,
        { id: '03', isAssigned: true, employeeName: 'John' },
      ],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual<viewModel.Project>({
      id: '01',
      name: 'Mike',
      externalId: 'test external id',
      comments: 'test comment',
      isActive: true,
      employees: [
        { id: '02', isAssigned: false, employeeName: 'Jane' },
        { id: undefined, isAssigned: undefined, employeeName: undefined },
        { id: '03', isAssigned: true, employeeName: 'John' },
      ],
    });
  });

  it('"employees" property should return an object with "undefined" properties when it received an array with some "null" values', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: '01',
      name: 'Mike',
      externalId: 'test external id',
      comments: 'test comment',
      isActive: true,
      employees: [
        { id: '02', isAssigned: false, employeeName: 'Jane' },
        null,
        { id: '03', isAssigned: true, employeeName: 'John' },
      ],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual<viewModel.Project>({
      id: '01',
      name: 'Mike',
      externalId: 'test external id',
      comments: 'test comment',
      isActive: true,
      employees: [
        { id: '02', isAssigned: false, employeeName: 'Jane' },
        { id: undefined, isAssigned: undefined, employeeName: undefined },
        { id: '03', isAssigned: true, employeeName: 'John' },
      ],
    });
  });
});
