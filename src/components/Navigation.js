import React, { Component } from 'react';
import { AppBar, IconButton, DropDownMenu, MenuItem } from 'material-ui';

import * as IconRegistry from '../assets/IconRegistry';
import { FlexDiv } from './common';
import ProfileMenu from './ProfileMenu';

const styles = {
    title: {
      cursor: 'pointer',
    },
    iconStyle: {
        marginTop: -10, 
        marginLeft: -8,
        fill: '#8a2159', 
        width: 40, 
        height: 40
    }
};
  
export default class Navigation extends Component {

  render() {
    return (
      <div style={{ flex: '0 1 auto', height: 50, width: '100%', zIndex: 1000 }}>
        <AppBar
            title={'PENSKE'}
            titleStyle={{ textAlign: 'left', color: 'black', fontSize: 14, fontFamily: 'arial' }}
            iconElementLeft={<IconButton iconStyle={styles.iconStyle}>
                        <IconRegistry.MenuIcon />
                    </IconButton> }
            // children={
            //     <DropDownMenu value={1}>
            //         <MenuItem value={1} primaryText="Never" />
            //     </DropDownMenu>
            // }
            iconElementRight={ <div style={{marginTop: -17  }}><ProfileMenu /></div> }
            iconStyleRight={{marginTop: '-4px'}}
            style={{
                height: 50,
                background: '#FFF',
                alignItems: 'center',
            }}    
        />
      </div>
    )
  }
}
