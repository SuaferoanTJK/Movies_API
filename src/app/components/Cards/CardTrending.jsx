import React from "react";
import Img from "../../../assets/img/thumbnails/beyond-earth/trending/large.jpg";
import Icons from "../Icons";

const CardTrending = () => {
  return (
    <>
      <div className="cardT">
        <img className="cardT_image" src={Img} alt="card image" />
        <div className="cardT_bookmark">
          <img src={Icons.BookmarkEmpty} alt="Bookmark" />
        </div>
        <div className="cardT_info">
          <div className="card_data">
            <p className="card_text">2019</p>
            <div className="card_category">
              <img className="card_image" src={Icons.NavMovies} alt="Icon" />
              <p className="card_text">Movie</p>
            </div>
            <p className="card_text">PG</p>
          </div>
          <p className="card_title">Beyond Earth</p>
        </div>
        <div className="cardT_button">
          <img src={Icons.IconPlay} alt="Icon play" />
          <p>Play</p>
        </div>
      </div>
    </>
  );
};

export default CardTrending;
