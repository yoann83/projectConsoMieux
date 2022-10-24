import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <div className="box-logo-xs">
        <img
          src="https://raw.githubusercontent.com/yoann83/media/main/consoMieuxMiniFini.png"
          width="250"
        />
        <img
          src="https://raw.githubusercontent.com/yoann83/media/main/consoMieuxMiniFiniBleu.png"
          width="250"
        />
        <hr />
      </div>
      <div className="box-logo-lg">
        <img
          src="https://raw.githubusercontent.com/yoann83/media/main/consomieuxFini.png"
          width="500"
        />
      </div>
      <hr />
      <div>
        <h1>ACCUEIL</h1>
        <hr />
        <button className="btn-cos-red" type="button">
          Enregistrer
        </button>
      </div>
    </div>
  );
}
