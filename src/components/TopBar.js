import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IconMenu, MenuItem, IconButton } from 'material-ui';

import * as IconRegistry from '../assets/IconRegistry';
import { FlexDiv } from './common';

const styles = {
    iconStyle: {
        marginTop: -10, 
        marginLeft: -8,
        fill: 'white', 
        width: 40, 
        height: 40
    }
};

export default class TopBar extends Component {
    static propTypes = {
        title: PropTypes.string,
        onFilter: PropTypes.func,
        filterable: PropTypes.bool,
    }

    render() {
        const { title, onFilter, filterable } = this.props;

        return (
            <FlexDiv style={{ justifyContent: 'space-between', backgroundColor: '#8a2159', width: '100%', height: 50 }}>
                <FlexDiv style={{ color: 'white', fontSize: 20, fontFamily: 'arial' }}>
                    <span style={{ marginLeft: 63, fontWeight: 'bold' }}>Employees&nbsp;&nbsp;</span>
                    <span>{title}</span>
                </FlexDiv>
                <FlexDiv>
                    {filterable &&<IconButton iconStyle={styles.iconStyle} onClick={onFilter} style={{ marginRight: 20 }}>
                        <IconRegistry.FilterIcon />
                    </IconButton>}
                    <IconMenu
                        iconButtonElement={<IconButton iconStyle={styles.iconStyle}>
                            <IconRegistry.MoreIcon />
                        </IconButton>}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        >
                        <MenuItem primaryText="Select Columns" />
                        <MenuItem primaryText="Download Employees" />
                        <MenuItem primaryText="Import Employees" />
                        <MenuItem primaryText="Delete Employees" />
                    </IconMenu>
                </FlexDiv>
            </FlexDiv>
        )
    }
}