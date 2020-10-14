import React, { Component } from 'react';

import './pagination.css';

export default class Pagination extends Component {
    
    createPaginationItems({ pageCount, page, onSetPage }) {
        const items = [];

        for ( let i = 1; i <= pageCount; i++ ) {
            const classes = (page === i ? 'active' : 'nonactive');

            items.push( 
                // it's not good to use indexes as keys but in this case it's ok.
                <li key={i} className={classes} onClick={() => onSetPage(i)}>
                  {i}
                </li>
            );
        }

        return items;
    }

    render() {
        const paginationItems = this.createPaginationItems(this.props);

        const { design = 'default' } = this.props;
        const classes = `pagination pagination--${design}`;

        return (
            <ul className={classes}>
                { paginationItems }
            </ul>
        );
    }
}
