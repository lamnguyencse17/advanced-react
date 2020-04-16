import React from 'react';
import ArticleList from '../ArticleList';
import DataApi from '@lib/DataApi';
import {data} from '@lib/testData';

const store = new DataApi(data);
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from 'enzyme';

describe('ArticleList', () => {
    const testProps = {
        articles: store.getState().articles,
    };
    
    it('renders correctly', () => {
        configure({adapter: new Adapter()})
        const wrapper = shallow(
            <ArticleList {...testProps}/>
        );
    expect(wrapper.props().children.length).toBe(Object.keys(store.getState().articles).length);
    });
});
