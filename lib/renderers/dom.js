import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import DataApi from '@lib/DataApi';

const store = new DataApi(window.initialData);

ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
);
