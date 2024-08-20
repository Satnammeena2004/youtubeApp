import React from 'react'

function EmbedVideo({id}) {
  console.log("id",id);
  return (
    <div>
        <iframe  width="670px" height="375" src={`https://www.youtube.com/embed/${id}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default EmbedVideo