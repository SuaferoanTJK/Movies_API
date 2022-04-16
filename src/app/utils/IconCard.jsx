import Icons from "../components/Icons";

export const IconsCard = (category, bookmark) => {
  let iconCategory;
  let iconBookmark;

  if (category === "Movie") {
    iconCategory = (
      <img className="card_image" src={Icons.NavMovies} alt="Icon Movie" />
    );
  } else if (category === "TV Series") {
    iconCategory = (
      <img className="card_image" src={Icons.NavSeries} alt="Icon TV Series" />
    );
  }

  if (bookmark === true) {
    iconBookmark = <img src={Icons.BookmarkFull} alt="Bookmark Full" />;
  } else {
    iconBookmark = <img src={Icons.BookmarkEmpty} alt="Bookmark Full" />;
  }

  return { iconCategory, iconBookmark };
};
