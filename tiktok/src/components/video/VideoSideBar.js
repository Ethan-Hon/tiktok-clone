import React, {useState} from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function VideoSideBar({likes, shares, messages}) {
  const [liked, setLiked] = useState(false);

  return(
    <div className="video-sidebar">
      <div className="videoSidebar_button">
        {liked? (
          <FavoriteIcon 
            fontSize="large"
            onClick = {(event) => setLiked(false)}
            />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick = {(event) => setLiked(true)}
          />
        )}
        <p>{liked? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar_button">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar_button">
        <ShareRoundedIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>);
}

export default VideoSideBar;
