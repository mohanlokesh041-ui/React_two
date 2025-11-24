const Ternary_operator = () => {

  const showContent = true; 

  const releaseYear = 2018;
  const imdbRating = 8.5;
  const moviePartsPlanned = 3;
  const runTimeInMinutes = 164;
  const awardsWon = 10;

  return (
    <>
      {showContent ? (
        <div>
          <p>Release Year: {releaseYear}</p>
          <p>IMDb Rating: {imdbRating}</p>
          <p>Planned Parts: {moviePartsPlanned}</p>
          <p>Runtime: {runTimeInMinutes} mins</p>
          <p>Awards Won: {awardsWon}+</p>
        </div>
      ) : (
        <p>No Content Available</p>
      )}
    </>
  );
};

export default Ternary_operator;