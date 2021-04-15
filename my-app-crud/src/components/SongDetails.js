import SongArtist from "./SongArtist"
import SongLyric from "./SongLyric"

const SongDetails = ({search,lyric,bio}) => {
  return (
    <div>
      <h2>Details</h2>
      <SongArtist/>
      <SongLyric/>
    </div>
  );
};

export default SongDetails;
