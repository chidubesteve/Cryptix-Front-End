import {  useEffect, useMemo } from "react";
import audiofile from "../public/warzone.mp3";

const useAudio = ({ isPlaying }) => {
  const audio = useMemo(() => {
    if (typeof window !== "undefined") {
      return new Audio(audiofile);
    }
    return null; // Return null if not in a browser
  }, []);

  useEffect(() => {
    if (!audio) return; // Prevent any operations if `audio` is not defined

    const handlePlay = async () => {
      if (isPlaying) {
        try {
          await audio.play(); // Wait for the play Promise to resolve
        } catch (error) {
          console.error("Error playing audio:", error);
        }
      } else {
        audio.pause();
      }
    };

    handlePlay();

    return () => {
      audio.pause();
    };
  }, [isPlaying, audio]);

  useEffect(() => {
    if (!audio) return;

    const handleEnded = () => {
      audio.currentTime = 0; //reset the audio
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [audio]);

  const play = async () => await audio?.play();
  const pause = () => audio?.pause();

  return { play, pause };
};

export default useAudio;
