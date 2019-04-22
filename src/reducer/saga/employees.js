import { call, put, takeEvery } from 'redux-saga/effects';

import { actions as employeesActions } from '../employees';
import { getEmployeesData } from '../../api/employees';

export function* loadEmployeesData(action) {

    // Set loading state
    yield put({ type: employeesActions.setLoading });

    yield put({ type: employeesActions.loadDepartmentPosition });
    // Just call api to get employees data
    const employees_data = yield call(getEmployeesData);
    if (!employees_data.error) {
        yield put({ type: employeesActions.setEmployeesData, payload: employees_data });
        yield put({ type: employeesActions.unsetLoading });
    } else {
        // Do something when api call failed
    }
}

export function* loadDepartmentPosition(action) {

    // We call api to get available department names and available positions
    // ...
    // Current use dummy data
    const departments = ['Finance', 'Production', 'Operations', 'Head Office', 'Marketing', 'Sales'];
    const positions =['Intern', 'Accountant', 'Analyst', 'Apprentice', 'Manager', 'Supervisor', 'Trainee', 'Team Lead', 'Operator', 'Officer']

    yield put({ type: employeesActions.setDepartmentPosition, payload: { departments: departments, positions: positions }});
}

export default function* watchEmployeesSaga() {
    yield takeEvery(employeesActions.loadEmployeesData, loadEmployeesData);
    yield takeEvery(employeesActions.loadDepartmentPosition, loadDepartmentPosition);
}