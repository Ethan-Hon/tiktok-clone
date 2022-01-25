import React, {useRef, useState} from 'react';
import "./Video.css"
import VideoSideBar from "./VideoSideBar";
import VideoFooter from "./VideoFooter";

function Video({url, channel, description, song, likes, messages,shares}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  

  const handleVideoPress = () => {
    //if video is playing stop it...
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
    //otherwise if it's not playing play it...
  };

  return (
    <div className="video">
      <video 
        onClick={handleVideoPress}
        autoPlay loop muted 
        src={url} 
        className="video_player" 
        ref={videoRef} 
        type="video/mp4"
      />
      <VideoSideBar
        likes={likes}
        shares={shares}
        messages={messages}
        />
      <VideoFooter 
        channel={channel}
        description={description}
        song={song}/>
    </div>
  )
}

export default Video;
