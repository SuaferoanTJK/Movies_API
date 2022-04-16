import React from "react";
import Icons from "../Icons";
import { IconsCard } from "../../utils/IconCard";

const CardTrending = (props) => {
  const iconsCard = IconsCard(props.category, props.isBookmarked);

  return (
    <>
      <div className="cardT">
        <img
          className="cardT_image"
          src={props.thumbnail.trending.large}
          alt="card image"
        />
        <div
          className="cardT_bookmark"
          onClick={() => {
            console.log("Bookmark changed");
          }}
        >
          {iconsCard.iconBookmark}
        </div>
        <div className="cardT_info">
          <div className="card_data">
            <p className="card_text">{props.year}</p>
            <div className="card_category">
              {iconsCard.iconCategory}
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
