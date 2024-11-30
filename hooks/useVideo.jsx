import React, { useEffect } from "react";

const useVideo = ({ videoRef, isPlaying }) => {
  useEffect(() => {
    if (!videoRef?.current) return;

    const video = videoRef.current;
    const handlePlayPause = async () => {
      if (isPlaying) {
       await  video.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      } else {
        video.pause();
      }
    };

    handlePlayPause();

    return () => {
      video.pause();
    };
  }, [isPlaying, videoRef]);
    
    useEffect(() => {
      if (!videoRef?.current) return;

      const video = videoRef.current;

      const handleEnded = () => {
        video.currentTime = 0; // Reset the video
      };

      video.addEventListener("ended", handleEnded);

      return () => {
        video.removeEventListener("ended", handleEnded);
      };
    }, [videoRef]);

      const play = async () => await videoRef?.current?.play();
      const pause = () => videoRef?.current?.pause();

      return { play, pause };
};

export default useVideo;
