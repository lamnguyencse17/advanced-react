import React, { Component } from "react";
import ArticleList from "./ArticleList";
import Context from "./Context";
import ContextDevTool from 'react-context-devtool';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = props.store.getState();
  }
  render() {
    return (
      <Context.Provider value={this.props.store.lookupAuthor}>
        <ContextDevTool context={Context} id="uniqContextId" displayName="Context Display Name" />
        <ArticleList
          articles={this.state.articles}
        />
      </Context.Provider>
    );
  }
}

export default App;
