import React from 'react';
import Context from "./Context";


const storeProvider = (Component) => {
    const withStore = (props) => {
        return (<Context.Consumer>
            {value => <Component {...props} store={value} />}
        </Context.Consumer>
        );};
    return withStore;
};

export default storeProvider;
