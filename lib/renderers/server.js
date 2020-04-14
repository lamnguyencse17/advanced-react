import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import DataApi from "@lib/DataApi";
import config from "@lib/config";

import App from '@lib/components/App';

const serverRender = async () => {
    const resp = await axios.get(`http://${config.host}:${config.port}/data`);
    const store = new DataApi(resp.data);

    return {
        initialMarkup: ReactDOMServer.renderToString(
            <App store={store} />
        ),
        initialData: resp.data
    }
};

export default serverRender;
