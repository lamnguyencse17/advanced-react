import React, { Component } from 'react';
import debounce from 'lodash.debounce';

export default class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
            searchTerm: ''
        };
    }

    doSearch = debounce(()=>{
        this.props.doSearch(this.state.searchTerm);
    }, 400)

    handleSearch = (event) => {
        this.setState({searchTerm: event.target.value}, () => {
            this.doSearch();
        });
    }
    render() {
        return (
            <input type="search" placeholder="Search here"
                value={this.state.searchterm}
                onChange={this.handleSearch}
            />
        );
    }
}
