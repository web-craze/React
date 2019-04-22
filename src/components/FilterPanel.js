import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, SelectField, MenuItem, IconButton, IconMenu } from 'material-ui';
import styled from 'styled-components';

import TextFieldWithTitle from './TextFieldWithTitle';
import SelectFieldWithTitle from './SelectFieldWithTitle';
import * as IconRegistry from '../assets/IconRegistry';

const Panel = styled.div`
    position: relative;
    width: 200px;
    padding-left: 60px;
    height: calc(100vh - 110px);
    background-color: #f4f4f4;
    padding-top: 10px;
    padding-right: 20px;
    border-right: 3px solid #c4c4c499;
`;

const Header = styled.h3`
    color: #454545;
    font-size: 20px;
    font-family: 'Arial';
`;

const styles = {
    floatingLabelStyle: {
        fontFamily: 'arial', 
        fontSize: 16, 
        textAlign: 'left', 
        color: '#8a2159', 
        fontWeight: 'bold' 
    },
    hintLabelStyle: {
        fontSize: 14,
        color: '#d3d3d3',
        fontFamily: 'arial', 
    },
    iconStyle: {
        marginTop: -10, 
        marginLeft: -8,
        fill: 'rgba(0, 0, 0, 0.3)',
        width: 24, 
        height: 24
    }
};

export default class FilterPanel extends Component {
    static propTypes = {
        departments: PropTypes.array,
        onChangeName: PropTypes.func,
        onChangeId: PropTypes.func,
        onChangeDepartment: PropTypes.func,
    };
    
    constructor(props) {
        super(props)

        this.state = {
            selectedDepartment: '',
        }

        this._onSelectDepartment = this._onSelectDepartment.bind(this);
    }

    _onSelectDepartment(id) {
        const depName = id === -1 ? 'All' : this.props.departments[id];

        this.setState({ selectedDepartment: depName });
        this.props.onChangeDepartment(id);
    }

    render() {
        const { departments, onChangeName, onChangeId, onChangeDepartment } = this.props;

        return (
            <Panel>
                <Header>Filters</Header>
                <TextField hintText={'Employee Name'} hintStyle={styles.hintLabelStyle} floatingLabelStyle={styles.floatingLabelStyle} floatingLabelText={'Name'} floatingLabelFixed={true} style={{ width: 200 }} onChange={(e) => {onChangeName(e.target.value)}} />
                <TextField hintText={'ID'} hintStyle={styles.hintLabelStyle} floatingLabelStyle={styles.floatingLabelStyle} floatingLabelText={'Employee ID'} floatingLabelFixed={true} style={{ width: 200 }} onChange={(e) => {onChangeId(e.target.value)}} />
                <IconMenu
                    style={{ position: 'absolute', right: 15, top: 170 }}
                    iconButtonElement={<IconButton iconStyle={styles.iconStyle}>
                        <IconRegistry.ArrowDropdownIcon />
                    </IconButton>}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    >
                    <MenuItem primaryText="(Employee IDs...)" disabled={true} />
                </IconMenu>
                <SelectField value={this.state.selectedDepartment} hintText={'Choice'} hintStyle={styles.hintLabelStyle} floatingLabelStyle={styles.floatingLabelStyle} floatingLabelText={'Department'} floatingLabelFixed={true} autoWidth={false} style={{ width: 200 }}>
                    <MenuItem value={'All'} primaryText={'All'} onClick={(e) => this._onSelectDepartment(-1)}/>
                    {
                        departments.map((department, id) => {
                            return <MenuItem key={id} value={department} primaryText={department} onClick={(e) => this._onSelectDepartment(id)}/>
                        })
                    }
                </SelectField>
                <SelectField hintText={'More'} hintStyle={styles.hintLabelStyle} floatingLabelStyle={styles.floatingLabelStyle} floatingLabelText={'More (Coming soon...)'} floatingLabelFixed={true} autoWidth={false} style={{ width: 200 }} disabled={true}>
                </SelectField>
            </Panel>
        )
    }
}