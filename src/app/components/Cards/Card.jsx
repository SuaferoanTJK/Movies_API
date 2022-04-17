import React from "react";
import Icons from "../Icons";
import { IconsCard } from "../../utils/IconCard";

const Card = (props) => {
  const iconsCard = IconsCard(props.category, props.isBookmarked);

  return (
    <div className="card">
      <div className="card_img">
        <img
          className="card_image"
          src={props.thumbnail.regular.large}
          alt="card image"
        />
      </div>

      <div
        className="card_bookmark"
        onClick={() => {
          console.log("Bookmark changed");
        }}
      >
        {iconsCard.iconBookmark}
      </div>
      <div className="card_info">
        <div className="card_data">
          <p className="card_text">{props.year}</p>
          <div className="card_category">
            {iconsCard.iconCategory}
            <p className="card_text">{props.category}</p>
          </div>
          <p className="card_text">{props.rating}</p>
        </div>
        <p className="card_title pt-2">{props.title}</p>
      </div>
      <div className="card_button">
        <img src={Icons.IconPlay} alt="Icon play" />
        <p>Play</p>
      </div>
    </div>
  );
};

export default Card;
