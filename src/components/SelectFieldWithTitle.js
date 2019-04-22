import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SelectField, MenuItem } from 'material-ui';
import styled from 'styled-components';

export default class SelectFieldWithTitle extends Component {
    render() {
        const { title, selectedValue, items, bNeedHelp, style, width, hintText } = this.props;

        return (
            <div style={style}>
                <div style={{ position: 'absolute', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <span style={{ fontFamily: 'arial', fontSize: 12, textAlign: 'left', color: '#8a2159', fontWeight: 'bold' }}>
                        {title}
                    </span>
                    {bNeedHelp && <span style={{ height: 14, width: 14, textAlign: 'center', borderRadius: '50%', backgroundColor: '#9b9b9b', color: 'white' }}>?</span>}
                </div>
                <SelectField value={selectedValue} hintText={hintText} autoWidth={false} style={{ width: width }}>
                {
                    items.map((item, id) => {
                        return <MenuItem value={item} key={id} primaryText={item} />
                    })
                }
                </SelectField>
            </div>
        )
    }
}

SelectFieldWithTitle.propTypes = {
    title: PropTypes.string.isRequired,
    selectedValue: PropTypes.string,   
    items: PropTypes.array,
    bNeedHelp: PropTypes.bool,
    style: PropTypes.object,
    width: PropTypes.number,
    hintText: PropTypes.string,
};

SelectFieldWithTitle.defaultProps = {
    title: 'No Title',
    selectedValue: '',
    items: [],
    bNeedHelp: false,
    style: { position: 'relative' },
    width: 150,
    hintText: ''
};