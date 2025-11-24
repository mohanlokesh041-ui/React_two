const Nullish = () => {

  
  const productionCost = 82;       
  const boxOfficeCollection = 250;  
  const soundtrackSongs = 7;
  const filmingLocations = null;
  const gangFactionsShown = undefined;
  const backgroundScoreRating = 9.2;

  return (
    <>
      <p>Production Cost (Crores): {productionCost ?? "Not specified"}</p>
      <p>Box Office Collection (Crores): {boxOfficeCollection ?? "Not specified"}</p>
      <p>Soundtrack Songs: {soundtrackSongs ?? "Not specified"}</p>
      <p>Filming Locations Count: {filmingLocations ?? "Not specified"}</p>
      <p>Gangs Featured in Story: {gangFactionsShown ?? "Not specified"}</p>
      <p>Background Score Rating: {backgroundScoreRating ?? "Not specified"}</p>
    </>
  );
};

export default Nullish;