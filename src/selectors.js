const getArticles = state => state.articles;
const getDateRange = state => state.filters.dateRange;
const getSelectedArticles = state => state.filters.selectedArticles;

export const getFilteredArticles = (state) => {
    const articles = getArticles(state);
    const dateRange = getDateRange(state);
    const selectedArticles = getSelectedArticles(state);
    console.log(articles)
    console.log(selectedArticles)
    return articles
        .filter(article => {
            const from = dateRange.from && dateRange.from.getTime();
            const to = dateRange.to && dateRange.to.getTime();
            const date = new Date(article.date).getTime()
            if (from && to) {
                return date >= from && date <= to;
            } else if (from) {
                return date >= from
            } else if (to) {
                return date <= to
            }
            return true
        })
}