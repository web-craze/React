import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper } from 'material-ui';
import styled from 'styled-components';
import { SelectField, MenuItem } from 'material-ui';

import TitleWithUnderline from '../TitleWithUnderline';
import TextFieldWithTitle from '../TextFieldWithTitle';
import SelectFieldWithTitle from '../SelectFieldWithTitle';

const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default class Credentials extends Component {
    static propTypes = {
        userName: PropTypes.string,
        role: PropTypes.string,
        employeeId: PropTypes.string,
    };

    render() {
        const { userName, role, employeeId } = this.props;
        const roles = ['Demo User'], password = '##dfdfe', siteAccesses = ['Four Sites'], pin = '3423';
        return (
            <Paper style={{ fontFamily: 'arial', fontSize: 12, textAlign: 'left', height: 210, width: 500, padding: 10 }}>
                <TitleWithUnderline title={'Credentials'} />
                <Row style={{ marginBottom: 20 }}>
                    <span style={{ fontWeight: 'bold', fontSize: 14, color: '#454545' }}>Portal and ChekMate</span>
                    <span style={{ fontWeight: 'bold', fontSize: 14, color: '#454545' }}>ChekRite Application</span>
                </Row>
                <Row>
                    <TextFieldWithTitle title={'Username'} value={userName} bNeedHelp={true} style={{ marginRight: 30, position: 'relative' }} width={130} />
                    <SelectFieldWithTitle title={'Role'} selectedValue={'Demo User'} items={roles} bNeedHelp={true} style={{ marginRight: 30, position: 'relative' }} width={130} />
                    <TextFieldWithTitle title={'Employee ID'} value={employeeId} bNeedHelp={true} width={130} />
                </Row>
                <Row>
                    <TextFieldWithTitle title={'Password'} type={'password'} value={password} bNeedHelp={true} style={{ marginRight: 30, position: 'relative' }} width={130} />
                    <SelectFieldWithTitle title={'Site Access'} selectedValue={'Four Sites'} items={siteAccesses} bNeedHelp={true} style={{ marginRight: 30, position: 'relative' }} width={130} />
                    <TextFieldWithTitle title={'Pin'} type={'password'}  value={pin} bNeedHelp={true} width={130} />
                </Row>
            </Paper>
        )
    }
}