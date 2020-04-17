import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider';

class SearchBar extends PureComponent {
    constructor(){
        super();
        this.state = {
            searchTerm: ''
        };
    }

    doSearch = debounce(()=>{
        this.props.store.setSearchTerm(this.state.searchTerm);
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
export default storeProvider()(SearchBar);
