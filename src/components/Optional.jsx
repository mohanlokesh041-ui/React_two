
const Optional = () => {

  const movieData = {
    title: "Vada Chennai",
    director: {
      name: "Vetrimaaran",
      awards: {
        national: 4,
      }
    },
    leadActor: {
      name: "Dhanush",
      details: null,   // details missing on purpose
    }
  };

  return (
    <>
      <h1>{movieData?.title}</h1>

      <p>
        Directed By: {movieData?.director?.name ?? "Director info missing"}
      </p>

      <p>
        National Awards: {movieData?.director?.awards?.national ?? "No awards found"}
      </p>

      <p>
        Actor Details: {movieData?.leadActor?.details?.role ?? "Actor details not available"}
      </p>
    </>
  );
};

export default Optional;