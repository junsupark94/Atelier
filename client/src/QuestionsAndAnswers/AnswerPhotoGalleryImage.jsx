import React from 'react';

export default function AnswerPhotoGalleryImage({ url, setphotoModalURL }) {
  function handleClick() {
    setphotoModalURL(url);
    document.getElementById('answer-modal').style.display = 'block';
  }

  return (
    <figure onClick={handleClick} >
      <img className="answer-photo" src={url} alt="user uploaded pic" />
    </figure>
  );
}
