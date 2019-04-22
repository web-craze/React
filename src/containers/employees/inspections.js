import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';

import PageWrapper from '../../components/PageWrapper';
import Graph from '../../components/inspections/graph';
import Details from '../../components/inspections/details';
import Credentials from '../../components/inspections/credentials';
import Statistics from '../../components/inspections/statistics';

const MainContent = styled.div`
    width: 100%;
    padding: 20px 30px;
`;

/*            "id": "5a977dd22da77",
            "first_name": "Shawnee",
            "last_name": "Palau",
            "employee_id": "12694",
            "position": "Accountant",
            "department": "Finance",
            "email": "shawnee.palau@penske.com",
            "photo": "https:\/\/test.mychekrite.com\/media\/get\/XEQYeqOnJR.jpg",
            "phone": "+61 491 570 161",
            "username": "shawnee.palau@penske.com",
            "role": "demo_user",
            "site": "Test",
            "company": "Developer"*/
class EmployeesInspections extends Component {

    render() {

        const { selectedEmployee, departments, positions } = this.props;
        const {
            first_name,
            last_name,
            employee_id,
            position,
            department,
            email,
            photo,
            phone,
            username,
            role,
            site,
            company
        } = selectedEmployee;

        return (
            <PageWrapper topBarTitle={`> ${first_name} ${last_name}`} filterable={false}>
                <MainContent>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 30, minHeight: 400 }}>
                        <Graph firstName={first_name} lastName={last_name} imageSrc={photo} />
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 350 }}>
                            <Details 
                                firstName={first_name}
                                lastName={last_name}
                                email={email}
                                phone={phone}
                                departments={departments}
                                positions={positions}
                                department={department}
                                position={position}
                                />
                            <Credentials 
                                userName={username}
                                role={role}
                                employeeId={employee_id}/>
                        </div>                        
                    </div>
                    <Statistics />
                </MainContent>
            </PageWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedEmployee: state.employees.selectedEmployee,
    departments: state.employees.departments,
    positions: state.employees.positions
});

export default connect(mapStateToProps)(EmployeesInspections);

