import React from 'react';
import { mount } from 'enzyme';
import Article from './index';
import CommentList from '../comment-list';
import Comment from '../comment';
import articles from '../../fixtures';

const article = articles[0];

describe('Article', () => {
    it('should render', () => {
        const component = mount(<Article article={article} />);
        expect(component.exists()).toEqual(true);
    });
    it('should display comment list', () => {
        const component = mount(<Article article={article} isOpen />);
        expect(component.find(CommentList).exists()).toEqual(true);
    });
    it('should open comment list', () => {
        const component = mount(<Article article={article} isOpen />);
        let comments = component.find(Comment);
        expect(comments.length).toEqual(0);
        component.find(CommentList).find('button').simulate('click');
        comments = component.find(Comment);
        expect(comments.length).toEqual(article.comments.length);
    });
});