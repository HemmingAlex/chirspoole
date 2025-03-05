"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function TransitionLink({ href, children, ...props }) {
  const router = useRouter();
  
  const handleClick = (e) => {
    e.preventDefault();
    
    // Create a visible element directly with plain DOM
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.right = '0';
    overlay.style.bottom = '0';
    overlay.style.backgroundColor = '#ea580c'; // orange-600
    overlay.style.zIndex = '9999';
    overlay.style.transform = 'scaleY(0)';
    overlay.style.transformOrigin = 'top';
    overlay.style.transition = 'transform 0.4s ease-in-out';
    
    document.body.appendChild(overlay);
    
    // Trigger animation
    setTimeout(() => {
      overlay.style.transform = 'scaleY(1)';
    }, 0);
    
    // Navigate after first half of animation
    setTimeout(() => {
      router.push(href);
      
      // Change transform origin for second half
      overlay.style.transformOrigin = 'bottom';
      
      // Start exit animation
      setTimeout(() => {
        overlay.style.transform = 'scaleY(0)';
        
        // Remove element after animation
        setTimeout(() => {
          document.body.removeChild(overlay);
        }, 200);
      }, 50);
    }, 400);
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}