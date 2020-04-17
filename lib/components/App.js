import React, { Component } from "react";
import ArticleList from "./ArticleList";
import Context from "./Context";
import ContextDevTool from 'react-context-devtool';
import SearchBar from "./SearchBar";
import pickBy from 'lodash.pickby';
import Timestamp from "./Timestamp";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = props.store.getState();
  }
  onStoreChange = () => {
    this.setState(this.props.store.getState());
  }
  componentDidMount(){
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }
  componentWillUnmount(){
    this.props.store.unsubscribe(this.subscriptionId);
  }

  render() {
    let {articles, searchTerm} = this.state;
    const searchRE = new RegExp(searchTerm, 'i');
    if (searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchRE) || value.body.match(searchRE);
      });
    }
    return (
      <Context.Provider value={this.props.store}>
        <ContextDevTool context={Context} id="uniqContextId" displayName="Context Display Name" />
        <Timestamp/>
        <SearchBar/>
        <ArticleList
          articles={articles}
        />
      </Context.Provider>
    );
  }
}

export default App;
