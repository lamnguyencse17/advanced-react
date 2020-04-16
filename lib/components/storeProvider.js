import React from 'react';
import Context from "./Context";


const storeProvider = (extraProps) => (Component) => {
    const withStore = (props) => {
        return (<Context.Consumer>
            {value => <Component {...props} {...extraProps(value, props)} store={value} />}
        </Context.Consumer>
        );};
    return withStore;
};

export default storeProvider;
