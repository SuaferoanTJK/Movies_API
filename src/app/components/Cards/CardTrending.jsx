import React from "react";
import Img from "../../../assets/img/thumbnails/beyond-earth/trending/large.jpg";
import Icons from "../Icons";

const CardTrending = (props) => {
  return (
    <>
      <div className="cardT">
        <img
          className="cardT_image"
          src={props.thumbnail.trending.large}
          alt="card image"
        />
        <div className="cardT_bookmark">
          <img src={Icons.BookmarkEmpty} alt="Bookmark" />
        </div>
        <div className="cardT_info">
          <div className="card_data">
            <p className="card_text">{props.year}</p>
            <div className="card_category">
              <img className="card_image" src={Icons.NavMovies} alt="Icon" />
              <p className="card_text">{props.category}</p>
            </div>
            <p className="card_text">{props.rating}</p>
          </div>
          <p className="card_title">{props.title}</p>
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
