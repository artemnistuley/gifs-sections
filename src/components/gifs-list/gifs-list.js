import React, { Component } from 'react';

import './gifs-list.css';

export default class GifsList extends Component {

    getGifsItems({ gifs }) {
        const items = gifs.map((gif) => {
            return (
                <li key={gif.id}>
                    <img src={gif.images.original.url} alt="" />
                </li>
            )
        });

        return items;
    }

    render() {
        const gifsItems = this.getGifsItems(this.props);

        const { design = 'default' } = this.props;
        const classes = `gifs-list gifs-list--${design}`;

        return (
            <ul className={classes}>
                { gifsItems }
            </ul>
        );
    }
}
