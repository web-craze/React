import React, { Component } from 'react';
import Avatar from 'react-avatar';
import PropTypes from 'prop-types';
import { IconButton, Paper } from 'material-ui';

import * as IconRegistry from '../../assets/IconRegistry';
import BarChart from '../BarChart';
import TitleWithUnderline from '../TitleWithUnderline';

class LabelWithTitle extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        label: PropTypes.any.isRequired,
    };

    render() {
        const { title, label } = this.props;

        return (
            <div className={'label-with-title'} style={{ lineHeight: '15px' }}>
                <span style={{ fontFamily: 'arial', fontSize: 12, textAlign: 'left', color: '#8a2159', fontWeight: 'bold' }}>
                    {title}
                </span><br/>
                {label}
            </div>
        )
    }
}

class EmployeeImage extends Component {
    static propTypes = {
        imageSrc: PropTypes.string,
    };

    render() {
        const { imageSrc } = this.props;

        return (
            <div className={'employee-image'} style={{ textAlign: 'left' }}>
                Employee Image
                <div style={{ marginTop: 20, position: 'relative', padding: 10, height: 110, width: 110, borderRadius: '50%', backgroundColor: '#9b9b9b'}}>
                    <div style={{ padding: 5, height: 100, width: 100, backgroundColor: 'white', borderRadius: '50%' }}>
                        <Avatar name={'John Smith'} src={imageSrc} size={100} round={true} />
                    </div>
                    <IconButton 
                        style={{
                            position: 'absolute', 
                            bottom: 0, 
                            left: 0, 
                            zIndex: 999, 
                            width: 40, 
                            height: 40, 
                            backgroundColor: '#8a2159', 
                            borderRadius: '50%',
                            boxShadow: 'rgba(0,0,0,0.56) 2px 2px 3px'}}
                        iconStyle={{
                            width: 36, 
                            height: 36, 
                            fill: 'white',
                            marginTop: -9,
                            marginLeft: -9,}}>
                        <IconRegistry.AddIcon />
                    </IconButton>
                </div>
            </div>
        )
    }
}

export default class Graph extends Component {
    static propTypes = {
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        imageSrc: PropTypes.string,
    };

    render() {

        const { firstName, lastName, imageSrc } = this.props;
        const name = firstName + ' ' + lastName;

        return (
            <Paper style={{ fontFamily: 'arial', fontSize: 12, textAlign: 'left', height: 400, width: 500, padding: 10 }}>
                <TitleWithUnderline title={name} />
                <div style={{ paddingRight: 30 }}>
                    <div style={{ marginBottom: 30, display: 'flex', justifyContent: 'space-between' }}>
                        <EmployeeImage imageSrc={imageSrc} />
                        <div className={'graph'}>
                            Inspections Completed
                            <BarChart />
                        </div>
                    </div>
                    <div style={{ fontSize: 10, display: 'flex', justifyContent: 'space-between' }}>
                        <LabelWithTitle title={'Total Inspections'} label={230} />
                        <LabelWithTitle title={'Open Issues'} label={4} />
                        <LabelWithTitle title={'Last Login'} label={'24/12/2017'} />
                        <LabelWithTitle title={'Sites'} label={4} />
                    </div>
                </div>
            </Paper>
        )
    }
}