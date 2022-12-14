import { useState } from "react";

export default function Entry({ action, data }) {
  const [episode, setEpisode] = useState("");

  function submit(e) {
    e.preventDefault();
    action(episode);
    setEpisode("");
  }

  return (
    <form onSubmit={submit}>
      Enter Episode Number (1-702):{" "}
      <input value={episode} onChange={(e) => setEpisode(e.target.value)} />
    </form>
  );
}
