import React, { Component } from 'react';

import debounce from '../../helpers/debounce';

export default class SearchField extends Component {
    
    constructor(props) {
        super(props);

        this.debouncedOnSearchChange = debounce((value) => {
            this.props.onSearchChange(value);
        }, 500);
    }

    handleSearch = (event) => {
        event.persist();
        this.debouncedOnSearchChange(event.target.value);
    };

    render() {
        const { search } = this.props;

        return (
            <div>
                search:{" "}
                <input
                type="text"
                value={search}
                onChange={this.handleSearch}
            />
      </div>
        );
    }
}
