import { useEffect, useState } from "react";
import { getCharacter } from "./services/services";

function DbzApp() {
  const [character, setCharacter] = useState(null);

  const handleAttackClick = () => {
    console.log("click");
    window.dispatchEvent(new CustomEvent("battle:attack-player-one"));
  };

  useEffect(() => {
    console.log("init DBZ");
    getCharacter().then((character) => setCharacter(character));
  }, []);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <section style={{ padding: 15, backgroundColor: "white" }}>
        <h2>Dbz App</h2>
      </section>
      <section
        style={{
          padding: 15,
          marginTop: 15,
          backgroundColor: "grey",
          border: "2px solid black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>Card Character</h3>
        <h4>{character?.name ?? "Sin nombre"}</h4>
        <img
          src={character?.image}
          style={{ width: "200px", height: "400px" }}
        />
        <button
          type="button"
          style={{
            border: "1px solid black",
            backgroundColor: "green",
            padding: 15,
            fontSize: 18,
          }}
          onClick={handleAttackClick}
        >
          Attack!
        </button>
      </section>
    </main>
  );
}

export default DbzApp;
