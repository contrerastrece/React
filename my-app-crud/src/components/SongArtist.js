
const SongArtist = ({ artist }) => {
  return (
    <section>
      <h3>{artist.strArtist}</h3>
     
        <img src={artist.strArtistThumb} value alt={artist.strArtis} />
        <p>
          {artist.intBornYear} - {artist.intDiedYear || "Presente"}
        </p>
        <p>{artist.strCountry}País</p>
        <p>
          {artist.strGenre} - {artist.strStyle}
        </p>
        <a
          href={`https://${artist.strWebsite}`}
          target="_blank"
          rel="noreferrer"
        >
          {artist.strWebsite}
        </a>
        <p style={{ whiteSpace: "pre-wrap" }}>{artist.strBiographyEN}</p>
    </section>
  );
};

export default SongArtist;
