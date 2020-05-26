import React, { Component } from "react";

class MovieRow extends Component {
  viewMovie() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
  }

  render() {
    const {
      id,
      poster_src,
      title,
      release_date,
      vote_average,
      overview,
    } = this.props.movie;
    return (
      <table key={id} className="card">
        <tbody>
          <tr>
            <td>
              <img width="200" src={poster_src} alt="poster" />
            </td>
            <td className="px-3 py-5">
              <h3 className="card-title py-3">{title}</h3>
              <p>公開日： {release_date}</p>
              <p>評価： {vote_average}</p>
              <p className="text-left px-5 py-4 mb-0">{overview}</p>
              <input
                className="btn text-left"
                type="button"
                onClick={this.viewMovie.bind(this)}
                value="さらに詳しく ＞"
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default MovieRow;
