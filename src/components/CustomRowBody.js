import React, { Component } from 'react'
import {
  TableRow,
  TableRowColumn
} from 'material-ui'
import { isEmpty } from 'lodash';

class CustomRowBody extends Component {

  state = {
    bSelected: false
  }

  render() {
    const { id, headers, body, selected, onSelectRow } = this.props;    
    
    return(
      <TableRow style={{cursor: 'pointer'}} selected={selected} selectable={true} hoverable={true} onClick={(e) => {onSelectRow(id)}}>
        {
          headers.map((field, index) => {
            const width = ( field.width === undefined ? '9%' : field.width.toString() + '%' );
            const textAlignStyle = ( field.align === undefined ? 'center' : field.align );
            
            var jsxElf = body[field.key];

            if (field.title === 'Image' && jsxElf !== undefined) {
              jsxElf = <img src={jsxElf} style={{borderRadius: '50%', width: 50, height: 50}} />
            }

            if (field.title === 'Name') {
                jsxElf = '' + body['first_name'] + ' ' + body['last_name'];
            }

            return <TableRowColumn 
              key={index} 
              style={{ 
                  paddingLeft: 0,
                  paddingRight: 0, 
                  textAlign: textAlignStyle, 
                  width: width,
                  fontFamily: 'Heebo Regular',
                  fontSize: 14,
              }} >
                {jsxElf}
            </TableRowColumn>
          })
        }
      </TableRow>      
    )
  }
}

export default CustomRowBody;