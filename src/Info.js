export default function Info({ episode, data }) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>Episode Number: {episode}</p>
      <p>Date Aired: {data.originalAirDate}</p>
      <p>Runtime: {data.runtime}</p>
      <p>Viewship(UK): {data.ukViewersMM} million</p>
    </div>
  );
}
