import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, TextField, SelectField, MenuItem } from 'material-ui';
import styled from 'styled-components';

import TitleWithUnderline from '../TitleWithUnderline';
import SelectFieldWithTitle from '../SelectFieldWithTitle';

const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default class Details extends Component {
    static propTypes = {
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
        departments: PropTypes.array,
        positions: PropTypes.array,
        department: PropTypes.string,
        position: PropTypes.string
    };

    render() {
        const { firstName, lastName, email, phone, departments, positions, department, position } = this.props;

        return (
            <Paper style={{ fontFamily: 'arial', fontSize: 12, textAlign: 'left', height: 170, width: 500, padding: 10, marginBottom: 20 }}>
                <TitleWithUnderline title={'Details'} />
                <Row>
                    <TextField value={firstName} style={{ marginRight: 30, width: 100 }}/>
                    <TextField value={email} style={{ marginRight: 30, width: 150 }} />
                    <SelectFieldWithTitle title={'Department'} selectedValue={department} items={departments} bNeedHelp={true} />
                </Row>
                <Row>
                    <TextField value={lastName} style={{ marginRight: 30, width: 100 }}/>
                    <TextField value={phone} style={{ marginRight: 30, width: 150 }} />
                    <SelectFieldWithTitle title={'Position'} selectedValue={position} items={positions} bNeedHelp={true} />
                </Row>
            </Paper>
        )
    }
}