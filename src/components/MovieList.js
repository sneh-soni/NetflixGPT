import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-2">
      <h1 className="text-lg md:text-2xl font-semibold pl-6 py-2 text-white hover:cursor-pointer">
        {title}
      </h1>
      {movies && (
        <div className="flex overflow-x-scroll overflow-y-hidden scrollbar scrollbar-none">
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdb_id}
                imdb_id={movie.imdb_id}
                original_title={movie.title}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
