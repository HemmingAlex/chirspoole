"use client";
import React, { useEffect, useRef, useState } from "react";
import { Volume2, Volume } from "lucide-react";

const YouTubePlayer = ({ videoId, muted, onMuteChange }) => {
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const [isAPIReady, setIsAPIReady] = useState(false);

  // Load YouTube API
  useEffect(() => {
    // Only load the API once
    if (window.YT) {
      setIsAPIReady(true);
      return;
    }

    const loadYouTubeAPI = () => {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    };

    // Define callback for when API is ready
    window.onYouTubeIframeAPIReady = () => {
      setIsAPIReady(true);
    };

    loadYouTubeAPI();

    // Cleanup
    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  // Initialize player
  useEffect(() => {
    if (!isAPIReady || !containerRef.current) return;

    const createPlayer = () => {
      try {
        // Clear the container first
        if (containerRef.current) {
          containerRef.current.innerHTML = "";
        }

        // Create new player
        playerRef.current = new window.YT.Player(containerRef.current, {
          videoId: videoId,
          height: "100%",
          width: "100%",
          playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            playlist: videoId,
            start: 6,
            playsinline: 1,
            enablejsapi: 1,
            modestbranding: 1,
            origin: window.location.origin,
          },
          events: {
            onReady: (event) => {
              event.target.playVideo();
              // Set initial mute state
              if (muted === "0") {
                event.target.unMute();
              } else {
                event.target.mute();
              }
            },
            onStateChange: (event) => {
              // If video ends or is unstarted, play it
              if (
                event.data === window.YT.PlayerState.ENDED ||
                event.data === window.YT.PlayerState.UNSTARTED
              ) {
                event.target.playVideo();
              }
            },
            onError: (event) => {
              console.error("YouTube player error:", event.data);
              // Attempt to recreate player on error
              createPlayer();
            },
          },
        });
      } catch (error) {
        console.error("Error creating YouTube player:", error);
      }
    };

    createPlayer();

    // Cleanup
    return () => {
      if (playerRef.current?.destroy) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [isAPIReady, videoId]); // Depend on isAPIReady and videoId

  // Handle mute state changes
  useEffect(() => {
    if (!playerRef.current?.getPlayerState) return;

    try {
      if (muted === "1") {
        playerRef.current.mute();
      } else {
        playerRef.current.unMute();
      }
    } catch (error) {
      console.error("Error changing mute state:", error);
    }
  }, [muted]);

  const handleMuteToggle = () => {
    onMuteChange(muted === "1" ? "0" : "1");
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div
        ref={containerRef}
        className="absolute h-screen w-[400%] lg:w-[120%] lg:h-[120%]"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div className="relative z-20 h-full flex items-center justify-center text-white">
        <div className="text-center max-w-3xl mx-auto px-4">
          <div className="cursor-pointer absolute bottom-10 right-5">
            {muted === "1" ? (
              <div className="flex" onClick={handleMuteToggle}>
                Sound
                <Volume className="hover:text-gray-300 ml-2 transition-colors" />
              </div>
            ) : (
              <div className="flex" onClick={handleMuteToggle}>
                Sound
                <Volume2 className="hover:text-gray-300 ml-2 transition-colors" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubePlayer;
