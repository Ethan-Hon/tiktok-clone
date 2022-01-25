import React from 'react';
import "./Video.css"
import Ticker from 'react-ticker';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({channel, description, song}) {
    return <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter_ticker">
          <MusicNoteIcon className="videoFooter_icon"/>
          <Ticker className="ticker">
            {({ index }) => (
              <>
                <p>
                  {song}
                </p>
              </>
            )}
          </Ticker>
        </div>
      </div>
    </div>;
}

export default VideoFooter;