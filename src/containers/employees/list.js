import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import styled from 'styled-components';
import { isEmpty } from 'lodash';
import {
    Table,
    TableBody,
    TableHeader,
    TableRow,
    TextField,
    IconButton,
    Checkbox,
    RaisedButton,
    TableHeaderColumn,
    TableRowColumn,
    CircularProgress,
} from 'material-ui';

import CustomRowHeader from '../../components/CustomRowHeader';
import CustomRowBody from '../../components/CustomRowBody';
import PageWrapper from '../../components/PageWrapper';
import FilterPanel from '../../components/FilterPanel';
import * as IconRegistry from '../../assets/IconRegistry';
import { loadEmployeesData, selectEmployee, filterEmployeesData, resetFilteredResults } from '../../reducer/employees';
import * as Utils from '../../utils/util';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 100px);
`

const FieldLabels=[{
    title: 'Image',
    key: 'photo',
    width: 9
  }, {
    title: 'Name',
    key: 'name',
    width: 18,
    align: 'left'
  }, {
    title: 'Employee ID',
    key: 'employee_id',
    width: 12,
    align: 'left'
  }, {
    title: 'Position',
    key: 'position',
    width: 15,
    align: 'left'
  }, {
    title: 'Department',
    key: 'department',
    width: 9,
    align: 'left'
  }, {
    title: 'Email',
    key: 'email',
    width: 18,
    align: 'left'
  }
];

class EmployeesList extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            bShowFilter: false,
            dSelectedRow: -1,
            filterName: '',
            filterId: '',
            filterDepartment: '',
        };

        this._showOrHideFilter = this._showOrHideFilter.bind(this);
        this._onSelectRow = this._onSelectRow.bind(this);
    }

    componentWillMount() {
        this.props.loadEmployeesData();
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.selectedEmployee.id !== this.props.selectedEmployee.id) {
    //         this.props.push('/inspections');
    //     }
    // }

    _onChangeFilterName(name) {
        this.setState({
            filterName: name
        }, () => {
            this.props.filterEmployeesData({
                name: this.state.filterName,
                empId: '',
                department: ''
            })
        });
    }

    _onChangeFilterId(id) {
        this.setState({
            filterId: id
        }, () => {
            this.props.filterEmployeesData({
                name: this.state.filterName,
                empId: this.state.filterId,
                department: this.state.filterDepartment
            })
        });
    } 

    _onChangeFilterDepartment(key) {
        const depName = key === -1 ? '' : this.props.departments[key];

        this.setState({
            filterDepartment: depName
        }, () => {
            this.props.filterEmployeesData({
                name: this.state.filterName,
                empId: this.state.filterId,
                department: this.state.filterDepartment
            })
        });
    } 

    _onGotoInspection() {
        this.props.push('/inspections');
    }

    _showOrHideFilter() {
        this.setState({ bShowFilter: !this.state.bShowFilter });
        if (this.state.bShowFilter === false) {
            this.setState({ 
                filterName: '',
                filterId: '',
                filterDepartment: ''
            });
            this.props.resetFilteredResults();
        }
    }

    _onSelectRow(rowNum) {
        this.props.selectEmployee(rowNum);
    }

    render() {
        const scrollWidth = Utils.getScrollbarWidth();
        const lineItems = [];

        const { isLoading, employeesData, filteredData, departments, positions } = this.props;
        const dataToShow = this.state.bShowFilter ? filteredData : employeesData;
        const count = dataToShow.length;

        return (
            <PageWrapper topBarTitle={`${count} ${count===1?'Employee':'Employees'}`} topBarOnFilter={this._showOrHideFilter} filterable={true} >
                {this.state.bShowFilter && 
                    <FilterPanel 
                        departments={departments}
                        onChangeName={this._onChangeFilterName.bind(this)}
                        onChangeId={this._onChangeFilterId.bind(this)}
                        onChangeDepartment={this._onChangeFilterDepartment.bind(this)} />}
                {isLoading && 
                    <Container>
                        <CircularProgress />
                    </Container>}
                {!isLoading && <Table
                        fixedHeader={true}
                        wrapperStyle={{ overflowX: 'hidden' }}
                        bodyStyle={{ width: `100%` }}
                        selectable={true}
                    >
                        <TableHeader displaySelectAll={false}>
                            <CustomRowHeader headers={FieldLabels} />
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={true}
                            showRowHover={true}
                        >
                            {
                                dataToShow.error || isEmpty(dataToShow) ? null
                                    :
                                    dataToShow.map((value, idx) =>
                                        <CustomRowBody id={value.id} headers={FieldLabels} body={value} selected={value.id===this.props.selectedId} key={idx} onSelectRow={this._onSelectRow.bind(this)} />
                                    )
                            }
                        </TableBody>
                    </Table>}
                {!isLoading && <IconButton 
                        style={{
                            position: 'fixed', 
                            bottom: 30, 
                            right: 50, 
                            zIndex: 999, 
                            width: 75, 
                            height: 75, 
                            backgroundColor: '#8a2159', 
                            borderRadius: '50%',
                            boxShadow: 'rgba(0,0,0,0.56) 2px 2px 3px'}}
                        iconStyle={{
                            width: 60, 
                            height: 60, 
                            fill: 'white',
                            marginTop: -4,
                            marginLeft: -4,}}
                        onClick={this._onGotoInspection.bind(this)}>
                        <IconRegistry.AddIcon />
                    </IconButton>}
            </PageWrapper >
        )
    }
}

const mapDispatchToProps = {
    push,
    loadEmployeesData,
    selectEmployee,
    filterEmployeesData,
    resetFilteredResults
};

const mapStateToProps = (state) => ({
    isLoading: state.employees.isLoading,
    employeesData: state.employees.employeesData,
    selectedId: state.employees.selectedId,
    selectedEmployee: state.employees.selectedEmployee,
    filteredData: state.employees.filteredResults,
    departments: state.employees.departments,
    positions: state.employees.positions,
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);