import React, { Component } from 'react'
import {
  TableHeaderColumn,
  TableRow,
} from 'material-ui'

class CustomRowHeader extends Component {

  render() {

    const { headers } = this.props;

    return (
        <TableRow style={{borderBottom: '3px solid gray'}}>
        {
          headers.map((field, index) => {
            const width = ( field.width === undefined ? '9%' : field.width.toString() + '%' );
            const textAlignStyle = ( field.align === undefined ? 'center' : field.align );
          
            return <TableHeaderColumn key={index} 
              style={{ 
                paddingLeft: 0, 
                paddingRight: 0, 
                width: width, 
                textAlign: textAlignStyle, 
                whiteSpace: 'pre-wrap',
                fontFamily: 'arial',
                fontWeight: 'bold', 
                fontSize: 14,
                color: '#8a2159',
                opacity: 0.8,
              }}> 
                {field.title} 
              </TableHeaderColumn>
          })
        }
        </TableRow>
    )
  }
}

export default CustomRowHeader;