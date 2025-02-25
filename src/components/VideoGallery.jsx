"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import YouTubePlayer from './MutableYotubePlayer';
import styles from './VideoGallery.module.css';

// Sample video data - replace with your actual data
const sampleVideos = [
  {
    id: 1,
    title: 'Wedding Performance',
    description: 'Beautiful live performance at a luxury wedding',
    thumbnailUrl: '/thumbnails/wedding.jpg',
    youtubeId: 'CZVKTBY3tNk', // Using your example YouTube ID
    duration: '3:45'
  },
  {
    id: 2,
    title: 'Corporate Event',
    description: 'Entertainment for a high-profile corporate event',
    thumbnailUrl: '/thumbnails/corporate.jpg',
    youtubeId: 'q-mARbGQ3iw', // Example YouTube ID
    duration: '4:20'
  },
  {
    id: 3,
    title: 'Birthday Celebration',
    description: 'Special birthday performance with full band',
    thumbnailUrl: '/thumbnails/birthday.jpg',
    youtubeId: 'dQw4w9WgXcQ', // Example YouTube ID
    duration: '8:15'
  },
  {
    id: 4,
    title: 'Award Ceremony',
    description: 'Performance at annual industry awards',
    thumbnailUrl: '/thumbnails/awards.jpg',
    youtubeId: 'jNQXAC9IVRw', // Example YouTube ID
    duration: '12:30'
  },
  {
    id: 5,
    title: 'Festival Appearance',
    description: 'Live performance at summer festival',
    thumbnailUrl: '/thumbnails/festival.jpg',
    youtubeId: 'RubBzkZzpUA', // Example YouTube ID
    duration: '5:50'
  },
  {
    id: 6,
    title: 'Bar Mitzvah',
    description: 'Special celebration performance',
    thumbnailUrl: '/thumbnails/barmitzvah.jpg',
    youtubeId: 'LXb3EKWsInQ', // Example YouTube ID
    duration: '7:20'
  }
];

const VideoGallery = ({ videos = sampleVideos }) => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [muted, setMuted] = useState("1"); // Start muted by default
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Example categories - you can modify these based on your needs
  const categories = ['All', 'Weddings', 'Corporate', 'Birthdays', 'Jewish Events', 'Asian Weddings'];

  const openVideo = (video) => {
    setActiveVideo(video);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  const handleMuteChange = (newMutedState) => {
    setMuted(newMutedState);
  };

  const filteredVideos = selectedCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Performance Gallery</h1>
      
      {/* Category filters */}
      <div className={styles.categoryFilters}>
        {categories.map(category => (
          <button 
            key={category}
            className={`${styles.categoryButton} ${selectedCategory === category ? styles.activeCategory : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className={styles.gallery}>
        {filteredVideos.map((video) => (
          <div 
            key={video.id} 
            className={styles.videoCard}
            onClick={() => openVideo(video)}
          >
            <div className={styles.thumbnailContainer}>
              <Image
                src={video.thumbnailUrl}
                alt={video.title}
                width={320}
                height={180}
                className={styles.thumbnail}
              />
              <div className={styles.duration}>{video.duration}</div>
              <div className={styles.playButton}>
                <svg viewBox="0 0 24 24" fill="white" width="48px" height="48px">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <h3 className={styles.videoTitle}>{video.title}</h3>
            <p className={styles.videoDescription}>{video.description}</p>
          </div>
        ))}
      </div>

      {activeVideo && (
        <div className={styles.videoModal} onClick={closeVideo}>
          <div className={styles.videoContainer} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeVideo}>✕</button>
            <div className={styles.youtubePlayerWrapper}>
              <YouTubePlayer 
                videoId={activeVideo.youtubeId} 
                muted={muted}
                onMuteChange={handleMuteChange}
              />
            </div>
            <div className={styles.modalContent}>
              <h2 className={styles.modalTitle}>{activeVideo.title}</h2>
              <p className={styles.modalDescription}>{activeVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;