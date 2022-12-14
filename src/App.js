import "./styles.css";
import { useState, useEffect } from "react";
import Title from "./Title.js";
import Entry from "./Entry.js";
import Info from "./Info.js";

export default function App() {
  const [episode, setEpisode] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    const inputtedEpisode = encodeURIComponent(episode.toLowerCase());
    const url = `https://api.catalogopolis.xyz/v1/episodes/${inputtedEpisode}`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((e) => setData(e));
  }, [episode]);

  return (
    <div className="App">
      <Title text="Doctor Who (1963) Episode Information" />
      <Entry action={setEpisode} />
      <Info episode={episode} data={data} />
    </div>
  );
}
