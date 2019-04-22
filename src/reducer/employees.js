import { createAction, handleActions } from 'redux-actions';

export const actions = {
    loadEmployeesData: 'employees/LOAD_DATA',
    setLoading: 'employees/LOADING_DATA',
    unsetLoading: 'employees/LOADED_DATA',
    setEmployeesData: 'employees/SET_DATA',
    selectEmployee: 'employees/SELECT_EMPLOYEE',
    filterEmployeesData: 'employees/FILTER_DATA',
    resetFilteredResults: 'employees/RESET_FILTER_DATA',
    setFilteredResults: 'employees/SET_FILTER_DATA',
    loadDepartmentPosition: 'employees/LOAD_DEPARTMENT_POSITION', // action for getting department names and positions
    setDepartmentPosition: 'employees/SET_DEPARMENT_POSITION'
};

export const setLoading = createAction(actions.setLoading);
export const unsetLoading = createAction(actions.unsetLoading);
export const loadEmployeesData = createAction(actions.loadEmployeesData);
export const loadDepartmentPosition = createAction(actions.loadDepartmentPosition);
export const setEmployeesData = createAction(actions.setEmployeesData);
export const setDepartmentPosition = createAction(actions.setDepartmentPosition);
export const selectEmployee = createAction(actions.selectEmployee);
export const filterEmployeesData = createAction(actions.filterEmployeesData);
export const setFilteredResults = createAction(actions.setFilteredResults);
export const resetFilteredResults = createAction(actions.resetFilteredResults);

const defaultState = { isLoading: false, employeesData: [], selectedId: 0, selectedEmployee: {}, filteredResults: [], departments: [], positions: [] };

export default handleActions({
    [actions.setLoading]: (state, action) => ({ ...state, isLoading: true }),
    [actions.unsetLoading]: (state, action) => ({ ...state, isLoading: false }),
    [actions.setFilteredResults]: (state, action) => ({ ...state, filteredResults: action.payload}), // This would be used when we implement filter by calling api
    [actions.resetFilteredResults]: (state, action) => ({ ...state, filteredResults: state.employeesData }),
    [actions.filterEmployeesData]: (state, action) => {
        // We can also implement this filtering feature by using api
        var sName = action.payload.name.toLowerCase();
        var sId = action.payload.empId.toLowerCase();
        var sDepartment = action.payload.department.toLowerCase();

        var tmpResults = [];
        state.employeesData.forEach((data) => {
            const name = (data.first_name + ' ' + data.last_name).toLowerCase();
            const empId = data.employee_id.toLowerCase();
            const department = data.department.toLowerCase();

            if (name.includes(sName) && empId.includes(sId)) {
                if (sDepartment === '' || sDepartment === department) {
                    tmpResults.push(data);
                }
            }
        });

        return { ...state, filteredResults: tmpResults};
    },
    [actions.setEmployeesData]: (state, action) => ({ 
        ...state, 
        employeesData: action.payload.employees, 
        selectedEmployee: action.payload.employees[0], 
        filteredResults: action.payload.employees }),
    [actions.selectEmployee]: (state, action) => {
        const index = action.payload;
        var tmpSelectedEmp;

        state.employeesData.forEach((data) => {
            
            if (data.id === index) {
                tmpSelectedEmp = data;
            }
        });

        return { ...state, selectedId: index, selectedEmployee: tmpSelectedEmp }
    },
    [actions.setDepartmentPosition]: (state, action) => ({ ...state, departments: action.payload.departments, positions: action.payload.positions }),
}, defaultState);