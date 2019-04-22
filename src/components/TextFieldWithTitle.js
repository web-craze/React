import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'material-ui';
import styled from 'styled-components';

export default class TextFieldWithTitle extends Component {
    render() {
        const { title, value, bNeedHelp, type, style, width, hintText } = this.props;

        return (
            <div style={style}>
                <div style={{ position: 'absolute', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <span style={{ fontFamily: 'arial', fontSize: 12, textAlign: 'left', color: '#8a2159', fontWeight: 'bold' }}>
                        {title}
                    </span>
                    {bNeedHelp && <span style={{ height: 14, width: 14, textAlign: 'center', borderRadius: '50%', backgroundColor: '#9b9b9b', color: 'white' }}>?</span>}
                </div>
                <TextField value={value} hintText={hintText} type={type} style={{ width:  width }} />
            </div>
        )
    }
}

TextFieldWithTitle.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string,   
    bNeedHelp: PropTypes.bool,
    type: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.number,
    hintText: PropTypes.string,
};

TextFieldWithTitle.defaultProps = {
    title: 'No Title',
    value: '',
    bNeedHelp: false,
    type: 'text',
    style: { position: 'relative' },
    width: 150
};