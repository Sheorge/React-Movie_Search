import React, { Component } from "react";
import "./App.css";
import MovieRow from "./MovieRow";
import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.performSearch("ジュラシック");
  }

  performSearch(searchTerm) {
    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=ja-JA&query=" +
      searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        const results = searchResults.results;

        let movieRows = [];

        results.forEach((movie) => {
          movie.poster_src =
            "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          const movieRow = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });

        this.setState({ rows: movieRows });
      },
      error: (xhr, states, err) => {},
    });
  }

  searchChangeHandler(e) {
    const boundObject = this;
    const searchTerm = e.target.value;
    boundObject.performSearch(searchTerm);
  }

  render() {
    return (
      <div className="App">
        <div className="titleBar">
          <h1 className="title">React 映画検索アプリ</h1>
        </div>

        <div className="container">
          <div className="input-box">
            <input
              className="input"
              onChange={this.searchChangeHandler.bind(this)}
              placeholder="キーワードを入力して検索"
            />
            <i class="fas fa-search search-button" />
          </div>
          {this.state.rows}
        </div>
      </div>
    );
  }
}

export default App;
