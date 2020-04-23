import React from "react";

class Articles extends React.Component {
  render() {
    let { articles, filter } = this.props;

    if (filter === 0) {
      articles = articles.sort((a, b) => {
        return b.upvotes - a.upvotes;
      });
    } else if (filter === 1) {
      articles = articles.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
    }
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => {
            return (
              <tr data-testid="article">
                <td data-testid="article-title">{article.title}</td>
                <td data-testid="article-upvotes">{article.upvotes}</td>
                <td data-testid="article-date">{article.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Articles;
