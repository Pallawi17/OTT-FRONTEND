import React, {
  useState,
  useRef,
  useEffect
} from 'react';
import '../../assets/css/style.css'
import video from '../../assets/videos/Big_Buck_Bunny.mp4';


const Videopalyer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handlePlayPause = () => {
      setIsPlaying(!isPlaying);
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    };

  const handleFullScreen = () => {
    if (!isFullScreen) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } 
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);
  };
  
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);
  
  return(
    <div className = "video-container"
      style = {
      {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }
      }>
    <video ref = {videoRef}
           controls = {false} >
     <source src = {video} type = "video/mp4" />
     </video>
    <button onClick = {handlePlayPause}
      style = {
          {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }
        }>
          {
            isPlaying ? 'Pause' : 'Play'
          } 
      </button>
      <button onClick = {
           handleFullScreen
         }
         style = {
             {
               position: 'absolute',
               bottom: '10px',
               right: '10px'
             }
           } > 
           {
             isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'
           } 
        </button>
     </div>
  
     
  )
}

export default Videopalyer;