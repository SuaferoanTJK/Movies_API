import React from "react";
import Icons from "../Icons";
import { IconsCard } from "../../utils/IconCard";
import { useDispatch, useSelector } from "react-redux";
import { changeBookmark } from "../../redux/actions/moviesActions";

const CardTrending = (props) => {
  const iconsCard = IconsCard(props.category, props.isBookmarked);

  const dispatch = useDispatch();
  const all = useSelector((state) => state.all);
  const allArray = all.map((element) => element);

  return (
    <>
      <div className="cardT">
        <img
          className="card_image"
          src={props.thumbnail.trending.large}
          alt="card image"
        />
        <div
          className="card_bookmark"
          onClick={() => {
            const newArray = allArray.map((element) =>
              element.title === props.title
                ? { ...element, isBookmarked: !props.isBookmarked }
                : element
            );
            dispatch(changeBookmark(newArray));
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
