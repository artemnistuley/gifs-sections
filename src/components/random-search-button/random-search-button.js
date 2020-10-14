import React, { Component } from 'react';

import getRandomString from '../../helpers/get-random-string';

export default class RandomSearchButton extends Component {

    render() {
        const { currentSearch, onSetRandomSearch } = this.props;

        return (
            <div>
                <p>current search: {currentSearch}</p>

                <button onClick={() => onSetRandomSearch(getRandomString())}>
                  random search
                </button>
            </div>
        );
    }
}
