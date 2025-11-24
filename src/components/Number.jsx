const Number = () => {
  const releaseYear = 2018;
  const imdbRating = 8.5;
  const moviePartsPlanned = 3;
  const runTimeInMinutes = 164;
  const awardsWon = 10;

  return (
    <>
      <p>Release Year: {releaseYear}</p>
      <p>IMDb Rating: {imdbRating}</p>
      <p>Planned Movie Parts: {moviePartsPlanned}</p>
      <p>Runtime (Minutes): {runTimeInMinutes}</p>
      <p>Awards Won: {awardsWon}+</p>
    </>
  );
};

export default Number;