import React from "react";

function Movie({ movie, removeMovie }) {
  return (
    <div>
      {movie.map((m) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            border: "1px solid grey",
            width: "30%",
            marginTop: 10,
            gap: 10
          }}
        >
          <img
            style={{ width: 550, height: 450 }}
            src={m.Poster}
            alt={m.Title}
          />
          <li>{m.Title}</li>
          <button
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => removeMovie(m.Title)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Movie;
