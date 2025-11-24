const Map = () => {

  const characters = [
    {
      name: "Anbu",
      playedBy: "Dhanush",
      role: "A talented carrom player who gets trapped in North Chennai politics."
    },
    {
      name: "Padma",
      playedBy: "Aishwarya Rajesh",
      role: "Anbu’s strong partner who supports him throughout."
    },
    {
      name: "Guna",
      playedBy: "Samuthirakani",
      role: "A political leader with strong influence in North Madras."
    },
    {
      name: "Rajiv",
      playedBy: "Daniel Balaji",
      role: "A powerful gangster with personal rivalries."
    }
  ];

  return (
    <>
      <h1>Vada Chennai – Characters</h1>

      <div className="cards-container">
        {characters.map((person, index) => (
          <div className="card" key={index}>
            <h3>{person.name}</h3>
            <p><b>Actor:</b> {person.playedBy}</p>
            <p><b>About:</b> {person.role}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Map;