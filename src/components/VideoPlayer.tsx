import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

const VideoPlayer = ({ src, poster }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div 
      className="relative group select-none" 
      onContextMenu={handleContextMenu}
    >
      <video 
        ref={videoRef}
        className="w-full aspect-video object-cover rounded-xl pointer-events-none"
        poster={poster}
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        onContextMenu={handleContextMenu}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Protective overlay - prevents direct video interaction */}
      <div 
        className="absolute inset-0 z-10"
        onClick={togglePlay}
        onContextMenu={handleContextMenu}
      />
      
      <button
        onClick={togglePlay}
        className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onContextMenu={handleContextMenu}
      >
        <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform">
          {isPlaying ? (
            <Pause className="w-10 h-10 text-primary-foreground" />
          ) : (
            <Play className="w-10 h-10 text-primary-foreground ml-1" />
          )}
        </div>
      </button>
    </div>
  );
};

export default VideoPlayer;
