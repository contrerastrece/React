import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;
  return (
    <>
      {lyric.err || lyric.name === "AbortError" ? (
        <Message msg={`No existe la canción ${search.song}`} bgColor={"#dc3545"} />
      ) : (
        <SongLyric />
      )}
      <p>{`${lyric.err}`}</p>
      <p>{`${lyric.name}`}</p>
      {bio.artists ? <SongArtist bio={bio} /> : <Message msg={`No existe el Interprete ${search.artist}`} bgColor={"#dc3545"} />}
    </>
  );
};

export default SongDetails;
