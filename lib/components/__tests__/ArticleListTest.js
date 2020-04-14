import React from 'react';
import ArticleList from '../ArticleList';
import DataApi from '@lib/DataApi';
import {data} from '@lib/testData';

const store = new DataApi(data);

import renderer from 'react-test-renderer';

describe('ArticleList', () => {
    const testProps = {
        articles: store.getState().articles,
        store: store
    };
    
    it('renders correctly', () => {
        const tree = renderer.create(
            <ArticleList {...testProps}/>
        ).toJSON();
        
        expect(tree.children.length).toBe(5);
        expect(tree).toMatchSnapshot();
    });
});
