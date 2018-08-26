import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import DateRange from './date-range'
import SelectFilter from './select'
import { setDateFilter, selectArticles } from '../../AC'

class Filters extends Component {
    static propTypes = {
        articles: PropsTypes.array,
        dateRange: PropsTypes.object.isRequired,
        selectedArticles: PropsTypes.array.isRequired,
    };

    render() {
        const { articles, dateRange, selectArticles, setDateFilter, selectedArticles } = this.props;
        return (
            <div>
                <SelectFilter articles = {articles} onSelect = {selectArticles} selected={selectedArticles} />
                <DateRange onChange={setDateFilter} from={dateRange.from} to={dateRange.to} />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    articles: state.articles,
    dateRange: state.filters.dateRange,
    selectedArticles: state.filters.selectedArticles,
})

const mapDispatchToProps = {
    setDateFilter,
    selectArticles,
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)