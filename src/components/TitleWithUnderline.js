import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TitleWithUnderline extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    render() {
        const { title } = this.props;

        return (
            <div style={{ fontWeight: 'bold', fontSize: 14, color: '#454545', textAlign: 'left', marginBottom: 20 }}>
                {title}
                <div style={{ marginTop: 5, position: 'relative', height: 2, width: '100%', backgroundColor: '#9b9b9b'}}>
                    <div style={{ height: '100%', width: 96, backgroundColor: '#8a2159' }} />
                </div>
            </div>
        )
    }
}