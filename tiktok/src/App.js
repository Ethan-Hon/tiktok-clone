import "./App.css";
import {useState, useEffect} from "react";
import Video from "./components/video/Video";
import Axios from './axios';


function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    async function fetchPosts() {
      const response = await Axios.get('/v2/posts');
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  console.log(videos);
  
  return (
    <div className="app">
      <div className="app_video" >
        <Video 
          url="https://v16-webapp.tiktok.com/3775a941f47a35cf1728a59149ccc26f/61f00d00/video/tos/maliva/tos-maliva-ve-0068c799-us/724369bf838e424688fc385177d05100/?a=1988&br=1402&bt=701&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3m_nz7ThXoO5lXq&l=202201250845120102450151461601A18A&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3c0aTU6ZnR1OTMzZzczNEApOjhlO2UzNDw2NzU0ODZmZ2dqZG1wcjRnbmFgLS1kMS9zcy5jLS8wMl81Mi1hX2E2XzY6Yw%3D%3D&vl=&vr="
          channel="ethan"
          description="this works"
          song="reactsong"
          likes={123}
          messages={456}
          shares={789}
          />
        <Video 
          url="https://v16-webapp.tiktok.com/faa9c05eacf3e2191af234e14fbb8afd/61f00ddd/video/tos/alisg/tos-alisg-pve-0037/ee67efa215c04da49baf83ec4753a54e/?a=1988&br=3740&bt=1870&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3m_nz7ThnqO5lXq&l=202201250848440102452442310F023002&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3BoOGQ6ZjV0ODMzODgzNEApZzU2PDczaDtkNzNlMztnO2dxa3NfcjRvbnNgLS1kLy1zc18uYGEwYjEzLzM1NGEyY146Yw%3D%3D&vl=&vr="
          channel="ethan2"
          description="this works too"
          song="reactsong2"
          likes={1234}
          messages={5678}
          shares={7890}
        />
      </div>
    </div>
  );
}

export default App;