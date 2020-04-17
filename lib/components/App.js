import React, { Component } from "react";
import ArticleList from "./ArticleList";
import Context from "./Context";
import ContextDevTool from 'react-context-devtool';
import SearchBar from "./SearchBar";
import pickBy from 'lodash.pickby';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = props.store.getState();
  }

  setSearchTerm = (searchTerm) => {
    this.setState({searchTerm});
  }

  render() {
    let {articles, searchTerm} = this.state;
    if (searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchTerm) || value.body.match(searchTerm);
      });
    }
    return (
      <Context.Provider value={this.props.store}>
        <ContextDevTool context={Context} id="uniqContextId" displayName="Context Display Name" />
        <SearchBar doSearch={this.setSearchTerm} />
        <ArticleList
          articles={articles}
        />
      </Context.Provider>
    );
  }
}

export default App;
