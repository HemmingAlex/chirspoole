"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    author: "Sergeant G Simpson",
    organization: "Defence Academy",
    text: "Dear Chris, I'd like to take this opportunity to thank you and your show for your performance at our summer ball. You performed an excellent party and everyone had a thoroughly enjoyable evening.",
  },
  {
    author: "Emirates Palace Abu Dhabi",
    organization: "U.A.E",
    text: "We would like to personally thank your group for the entertainment and making it such a success of the recently concluded New Years Eve Gala event in the Emirates Palace. This would not be possible without your very good performance that complimented the entire evening of entertainment. It is very gratifying to have you as one of the major performer's, which made the event truly memorable.",
  },
  {
    author: "Anna & Sean",
    organization: "Bride and Groom",
    text: "Wow is all I can say, and a BIG thank you for Sat. Everyone thought you were great -- loads of calls re the show. Again THANK YOU, what talent.",
  },
  {
    author: "Shaun Reynolds",
    organization: "PEC Warrant Officers and Sergeant",
    text: "I would like to take this opportunity to thank you, for once again supplying top class entertainment for the Warrant Officers and Sergeants Mess, Summer Ball. The Shades were nothing short of outstanding. Right from the outset, you had guests on the dance floor, with an aptly named 'Let Me Entertain You'. Both sets were so powerful and engaging, that I thought literally bring the marquee down. Everyone, I spoke to on the night, and since, commented on how amazing you were.",
  },
  {
    author: "Liz Drake",
    organization: "Mother Of The Bride",
    text: "I just wanted to say how very much we enjoyed having you all here on Saturday evening to play for James and Pippa's wedding. We have not had a live band here before, can't think why after that performance. We all had such a good time and just loved every minute of it!! Thank you so much for all you did to make the evening go so well, it had a terrific buzz and I know everyone had a good time, especially the Bride. While you were packing up, we just sat there saying we really didn't want it to end. It certainly helped to make the day a truly special one.",
  },
  {
    author: "Jane S",
    organization: "Bride",
    text: "Thank you SO SO MUCH for performing at my wedding. You were pure elegance class and talent!!! Your performances during guest arrival, first dance were absolutely perfect, and the evening party was just breath-taking! I'm so excited to call you again soon for future family events, we cannot wait to have you all perform again!",
  },
  {
    author: "Alana & Sky",
    organization: "Bride and Groom",
    text: "Shades helped to make our wedding ceremony so special. I'll never forget waking down the aisle to a beautiful String Quartet. During cocktail hour the Saxophonist and DJ upped the vibes and had my bridesmaids dancing and singing creating a wonderful, joyful atmosphere. beautiful music 💗🎶💗",
  },
];

// Helper function to truncate text
const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength).trim() + '...';
};

const ShadesReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [height, setHeight] = useState("auto");
  const [dragStart, setDragStart] = useState(null);
  const [dragEnd, setDragEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  // Debounce ref for preventing multiple rapid swipes
  const dragDebounceRef = useRef(null);

  // Swipe threshold and constraints
  const minSwipeDistance = 50;
  const maxDragDistance = 200; // Limit how far users can drag

  // Touch handlers (mobile)
  const onTouchStart = (e) => {
    setIsDragging(true);
    setDragEnd(null);
    setDragStart(e.targetTouches[0].clientX);
    setDragOffset(0);
  };

  const onTouchMove = (e) => {
    if (!dragStart) return;

    const currentTouch = e.targetTouches[0].clientX;
    setDragEnd(currentTouch);

    // Calculate drag distance with constraints
    const rawOffset = currentTouch - dragStart;
    const constrainedOffset =
      Math.sign(rawOffset) * Math.min(Math.abs(rawOffset), maxDragDistance);

    setDragOffset(constrainedOffset);
    
    // Active swiping - trigger review change during swipe on mobile too
    if (Math.abs(rawOffset) > minSwipeDistance * 1.2 && !e.swipeHandled) {
      e.swipeHandled = true; // Prevent multiple triggers
      if (rawOffset < 0) {
        nextReview();
      } else {
        prevReview();
      }
      // Reset drag state after changing review
      setTimeout(() => {
        setIsDragging(false);
        setDragOffset(0);
      }, 50);
    }
  };

  const onTouchEnd = () => {
    handleDragEnd();
  };

  // Mouse handlers (desktop)
  const onMouseDown = (e) => {
    setIsDragging(true);
    setDragEnd(null);
    setDragStart(e.clientX);
    setDragOffset(0);
    e.preventDefault(); // Prevent text selection during drag
  };

  const onMouseMove = (e) => {
    if (!isDragging || !dragStart) return;

    const currentPosition = e.clientX;
    setDragEnd(currentPosition);

    // Calculate drag distance with constraints
    const rawOffset = currentPosition - dragStart;
    const constrainedOffset =
      Math.sign(rawOffset) * Math.min(Math.abs(rawOffset), maxDragDistance);

    setDragOffset(constrainedOffset);
    
    // Check if dragging has crossed the swipe threshold and trigger review change
    if (Math.abs(rawOffset) > minSwipeDistance * 1.5 && !e.dragHandled) {
      e.dragHandled = true; // Prevent multiple triggers
      if (rawOffset < 0) {
        nextReview();
      } else {
        prevReview();
      }
      // Reset drag state after changing review
      setTimeout(() => {
        setIsDragging(false);
        setDragOffset(0);
      }, 50);
    }
  };

  const onMouseUp = () => {
    handleDragEnd();
  };

  // Common drag end handler for both touch and mouse
  const handleDragEnd = () => {
    // Only handle end events for very small movements
    // Larger movements are now handled during the move event
    setIsDragging(false);
    setDragOffset(0);

    if (!dragStart || !dragEnd) return;

    const distance = dragStart - dragEnd;
    
    // Only trigger on small movements that didn't already trigger during drag
    if (Math.abs(distance) <= minSwipeDistance && Math.abs(distance) > 10) {
      if (distance > 0) {
        nextReview();
      } else {
        prevReview();
      }
    }
    
    // Reset state regardless
    setDragStart(null);
    setDragEnd(null);
  };

  // Add hooks for detecting drag end when pointer moves outside component
  useEffect(() => {
    const handleGlobalTouchEnd = () => {
      if (isDragging) {
        handleDragEnd();
      }
    };

    const handleGlobalMouseUp = () => {
      if (isDragging) {
        handleDragEnd();
      }
    };

    const handleGlobalMouseMove = (e) => {
      if (isDragging) {
        onMouseMove(e);
      }
    };

    window.addEventListener("touchend", handleGlobalTouchEnd);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("mousemove", handleGlobalMouseMove);
    
    return () => {
      window.removeEventListener("touchend", handleGlobalTouchEnd);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, [isDragging, dragStart]);

  // Calculate fixed height based on the longest truncated review
  useEffect(() => {
    const calculateFixedHeight = () => {
      // Create a temporary element to measure text height
      const tempElement = document.createElement('div');
      tempElement.className = 'review-content text-xl md:text-2xl leading-relaxed italic text-white font-light';
      tempElement.style.visibility = 'hidden';
      tempElement.style.position = 'absolute';
      tempElement.style.width = '100%';
      tempElement.style.maxWidth = '768px'; // Approximate max width of the container
      tempElement.style.padding = '0 16px';
      
      // Sample text with max length plus "Read more" link
      tempElement.innerHTML = `"${truncateText('X'.repeat(200), 150)}... <a>Read more</a>"`;
      
      document.body.appendChild(tempElement);
      const textHeight = tempElement.scrollHeight;
      document.body.removeChild(tempElement);
      
      // Set fixed height plus padding for consistent sizing
      setHeight(`${textHeight + 40}px`);
    };

    // Calculate on mount and resize
    calculateFixedHeight();
    window.addEventListener("resize", calculateFixedHeight);

    return () => {
      window.removeEventListener("resize", calculateFixedHeight);
    };
  }, []);

  const nextReview = () => {
    // Prevent rapid multiple swipes with debounce
    if (dragDebounceRef.current) return;
    
    dragDebounceRef.current = setTimeout(() => {
      dragDebounceRef.current = null;
    }, 300);
    
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    // Prevent rapid multiple swipes with debounce
    if (dragDebounceRef.current) return;
    
    dragDebounceRef.current = setTimeout(() => {
      dragDebounceRef.current = null;
    }, 300);
    
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: (isDragging) => ({
      x: isDragging ? dragOffset : 0,
      opacity: 1,
      transition: {
        x: isDragging
          ? { duration: 0, type: "tween" }
          : { type: "spring", stiffness: 300, damping: 30 },
      },
    }),
    exit: (direction) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 py-24 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mb-6"
          />
        </motion.div>

        {/* Fixed height carousel container */}
        <div
          className="max-w-4xl mx-auto relative"
          style={{ height: `calc(${height} + 400px)` }}
        >
          {/* Desktop navigation buttons */}
          <div className="hidden md:block">
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-black/30 hover:bg-black/50 text-white p-4 rounded-full backdrop-blur-sm transition-all z-20"
              aria-label="Previous review"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-black/30 hover:bg-black/50 text-white p-4 rounded-full backdrop-blur-sm transition-all z-20"
              aria-label="Next review"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Reviews carousel */}
          <div className="overflow-hidden relative touch-pan-y">
            {/* Resistance indicators at edges */}
            <div
              className={`resistance-indicator resistance-left ${
                dragOffset < -maxDragDistance * 0.8 ? "opacity-60" : ""
              }`}
            ></div>
            <div
              className={`resistance-indicator resistance-right ${
                dragOffset > maxDragDistance * 0.8 ? "opacity-60" : ""
              }`}
            ></div>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={isDragging ? true : direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 1,
                }}
                className={`backdrop-blur-md bg-gradient-to-b from-black/40 to-black/60 p-10 md:p-16 rounded-2xl shadow-2xl border border-white/10 ${
                  isDragging ? "dragging" : "draggable"
                }`}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                onMouseDown={(e) => {
                  // Only enable drag if not clicking on a link
                  if (e.target.tagName !== 'A') {
                    onMouseDown(e);
                  }
                }}
              >
                <Quote className="text-indigo-300 mb-8 opacity-80" size={48} />
                <p className="review-content text-xl md:text-2xl leading-relaxed italic mb-10 text-white font-light">
                  "{truncateText(reviews[currentIndex].text, 150)}"
                  {reviews[currentIndex].text.length > 150 && (
                    <a 
                      href="https://www.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block ml-2 text-indigo-300 hover:text-indigo-200 transition-colors underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Read more
                    </a>
                  )}
                </p>
                <motion.div
                  className="flex flex-col md:flex-row md:items-center justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white">
                      {reviews[currentIndex].author}
                    </h4>
                    <p className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent font-medium mt-1">
                      {reviews[currentIndex].organization}
                    </p>
                  </div>
                  <div className="flex space-x-1 text-amber-400 mt-4 md:mt-0">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="drop-shadow-glow"
                        size={20}
                        fill="#FFC107"
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Gesture indicator - shown on both mobile and desktop */}
            <div className="gesture-indicator md:hidden">
              <ChevronLeft size={14} />
              <span>Swipe or drag to navigate</span>
              <ChevronRight size={14} />
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {reviews.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className="relative"
              whileHover={{ scale: 1.2 }}
              aria-label={`Go to review ${index + 1}`}
            >
              <span
                className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-indigo-400 w-6"
                    : "bg-white/50 hover:bg-white/80"
                }`}
              />
              {index === currentIndex && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-indigo-400/30"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Global styles for glow effects and gesture indicator */}
      <style jsx global>{`
        .drop-shadow-glow {
          filter: drop-shadow(0 0 6px rgba(255, 193, 7, 0.5));
        }
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(99, 102, 241, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
          }
        }
        .gesture-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          text-align: center;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          padding-bottom: 12px;
          pointer-events: none;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
        }
        .gesture-indicator svg {
          animation: swipeHint 2s ease-in-out infinite;
        }
        @keyframes swipeHint {
          0%,
          100% {
            transform: translateX(0);
            opacity: 0.5;
          }
          50% {
            transform: translateX(10px);
            opacity: 1;
          }
        }
        @media (min-width: 768px) {
          .gesture-indicator {
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          .draggable:hover + .gesture-indicator,
          .dragging + .gesture-indicator {
            opacity: 0.8;
          }
        }
        /* Prevent text selection during swipe */
        .review-content {
          user-select: none;
        }

        /* Cursor styling while dragging */
        .dragging {
          cursor: grabbing !important;
        }
        .draggable {
          cursor: grab;
        }

        /* Visual feedback for drag limits */
        @keyframes edgeResistance {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
        }
        .resistance-indicator {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 6px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0)
          );
          pointer-events: none;
          animation: edgeResistance 1s ease-in-out infinite;
          opacity: 0;
        }
        .resistance-left {
          left: 0;
          transform: scaleX(-1);
        }
        .resistance-right {
          right: 0;
        }
      `}</style>
    </div>
  );
};

export default ShadesReviews;