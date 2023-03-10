"use client";
import React from "react";
import YouTube from "react-youtube";

const BackgroundPlayer = ({ videoId }) => {
  return (
    <YouTube
      videoId={videoId}
      opts={{
        height: "100%",
        width: "100%",
        playerVars: {
          disablekb: 1,
          autoplay: 1,
          controls: 0,
          showinfo: 0,
          start: 5,
          end: 60,
          loop: 1,
          modestbranding: 1,
          rel: 0,
        },
      }}
      onReady={(event) => {
        console.log(event.target);
        event.target.mute();
        event.target.playVideo();
      }}
      className={
        "absolute top-0 left-0 h-screen w-screen select-none brightness-50"
      }
    />
  );
};

export default BackgroundPlayer;
