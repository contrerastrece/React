import React, { useState } from "react";
const SongLyric = ({title,lyrics}) => {
  return (
    <section>
      <h2>{title}</h2>
      {/* <p>`${search.lyric}`</p> */}

      <blockquote style={{whiteSpace:"pre-wrap"}}>{lyrics}</blockquote>
    </section>
  );
};

export default SongLyric;
