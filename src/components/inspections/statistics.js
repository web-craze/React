import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { 
    Paper, 
    RaisedButton,
    Table,
    TableBody,
    TableHeader,
    TableRow,
    TextField,
    TableHeaderColumn,
    TableRowColumn,
} from 'material-ui';
import styled from 'styled-components';
import muiThemeable from 'material-ui/styles/muiThemeable';

import TitleWithUnderline from '../TitleWithUnderline';
import CustomRowHeader from '../CustomRowHeader';
import CustomRowBody from '../CustomRowBody';

const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;


const FieldLabels=[{
    title: '#',
    key: 'id',
    width: 9,
    align: 'left'
  }, {
    title: 'Checklist',
    key: 'checklist',
    width: 9,
    align: 'left'
  }, {
    title: 'Date',
    key: 'date',
    width: 27,
    align: 'left'
  }, {
    title: 'Duration',
    key: 'duration',
    width: 9,
    align: 'left'
  }
];

// Dummy data
const inspections = [
    {
        id: 'PN322',
        checklist: 'Control Demo V2',
        date: '19 Dec 2017 11:52am',
        duration: '23s'
    }, {
        id: 'PN322',
        checklist: 'Control Demo V2',
        date: '19 Dec 2017 11:52am',
        duration: '23s'
    }, {
        id: 'PN322',
        checklist: 'Control Demo V2',
        date: '19 Dec 2017 11:52am',
        duration: '23s'
    }, {
        id: 'PN322',
        checklist: 'Control Demo V2',
        date: '19 Dec 2017 11:52am',
        duration: '23s'
    }, {
        id: 'PN322',
        checklist: 'Control Demo V2',
        date: '19 Dec 2017 11:52am',
        duration: '23s'
    }
];

class Statistics extends Component {

    render() {
        const scrollWidth = 17;

        return (
            <Paper style={{ fontFamily: 'arial', fontSize: 12, textAlign: 'left', width: 1050, padding: 10 }}>
                <TitleWithUnderline title={'Employee Inspections'} />
                <div style={{ padding: 10 }}>
                    <div style={{ display: 'flex' }}>
                        <RaisedButton label="Inspections" buttonStyle={{ borderRadius: 4 }} style={{ width: 120, height: 20, marginRight: 20 }} primary={true} labelStyle={{ fontFamily: 'arial', fontSize: 12 }} />
                        <RaisedButton label="Issues" buttonStyle={{ borderRadius: 4 }} style={{ width: 120, height: 20, marginRight: 20 }} backgroundColor={this.props.muiTheme.palette.secondary1Color} labelColor={'white'} labelStyle={{ fontFamily: 'arial', fontSize: 12 }} />
                    </div>
                    <Table
                        fixedHeader={true}
                        wrapperStyle={{ overflowX: 'hidden' }}
                        bodyStyle={{ width: `calc(100% + ${scrollWidth}px)` }}
                        selectable={true}
                        onCellClick={this._onSelectRow}
                        onRowSelection={this._onSelectRow}
                    >
                        <TableHeader displaySelectAll={false}>
                            <CustomRowHeader headers={FieldLabels} />
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={false}
                            showRowHover={true}
                        >
                            {
                                inspections.error || isEmpty(inspections) ? null
                                    :
                                    inspections.map((value, idx) =>
                                        <CustomRowBody headers={FieldLabels} body={value} key={idx} />
                                    )
                            }
                        </TableBody>
                    </Table>
                </div>
            </Paper>
        )
    }
}

export default muiThemeable()(Statistics);