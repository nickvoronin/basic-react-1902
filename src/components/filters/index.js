import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import DateRange from './date-range'
import SelectFilter from './select'
import { setDateFilter } from '../../AC'

class Filters extends Component {
    static propTypes = {
        articles: PropsTypes.array,
    };

    render() {
        const { articles, dateRange } = this.props;
        return (
            <div>
                <SelectFilter articles = {articles} />
                <DateRange onChange={this.props.setDateFilter} from={dateRange.from} to={dateRange.to} />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    articles: props.articles || state.articles,
    dateRange: state.filters.dateRange,
})

const mapDispatchToProps = {
    setDateFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)