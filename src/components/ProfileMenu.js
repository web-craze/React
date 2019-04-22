import React, { Component } from 'react';
import styled from 'styled-components';
import Avatar from 'react-avatar';
import {
    ListItem,
    IconMenu,
    IconButton,
    Divider
} from 'material-ui';

import * as IconRegistry from '../assets/IconRegistry';

const Username = styled.div`
    color: #454545;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    float: left;
    font-family: 'Arial';
`

const ArrowDownIcon = styled(IconRegistry.KeyArrowDownIcon)`
    margin-top: -5px;
    margin-left: 5px;
`

export default class ProfileMenu extends Component {

    render() {
        const firstName = "Jean", lastName = "Valjean", email = "jean.val@gmail.com";

        return (
            <IconMenu
                iconButtonElement={ <IconButton style={{ marginLeft: -200 }}>
                    <ListItem
                        disabled={true}
                        leftAvatar={ <Avatar round={true} name={firstName + ' ' + lastName} email={email} size={40} />}
                        >
                        <Username>{firstName} {lastName}</Username>
                        <ArrowDownIcon color="#454545" />
                    </ListItem>
                </IconButton>}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'middle', vertical: 'top'}}
                >
      
                <ListItem
                    leftAvatar={<Avatar name={firstName + ' ' + lastName} round={true} email={email} size={45} />}
                    primaryText={firstName + ' ' + lastName}
                    secondaryText={email}
                    hoverColor="#e5e5e5"
                />
                <Divider />
                <ListItem primaryText="Logout" />
            </IconMenu>
        )
    }
}