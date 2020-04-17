import React from "react";
import Context from "./Context";

const storeProvider = (extraProps = () => {}) => (Component) => {
  const withStore = (props) => {
    let Result = class extends React.PureComponent {
      static displayName = `${Component.name}Container`;
      static contextType = Context;
      constructor(props) {
        super(props);
      }
      usedState = () => {
        let context = this.context;
        return extraProps(context, props);
      }
      onStoreChange = () => {
        if (this.subscriptionId) {
          this.setState(extraProps(this.context, props));
        }
      }
      componentDidMount() {
        this.subscriptionId = this.context.subscribe(this.onStoreChange);
      }
      componentWillUnmount() {
        this.context.unsubscribe(this.subscriptionId);
        this.subscriptionId = null;
      }
      render() {
        return (
          <Component {...props} {...this.usedState()} store={this.context} />
        );
      }
    };
    return <Result />;
  };
  return withStore;
};

export default storeProvider;
