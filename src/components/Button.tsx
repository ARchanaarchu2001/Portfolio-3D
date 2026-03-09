"use client";

/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section with ID "counter",
 * with a small offset from the top for better visual placement.
 */

import React from 'react';

interface ButtonProps {
  text: string;
  className?: string;
  id?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault(); // Stop the link from jumping instantly

        // target element determined by provided id prop
        if (id) {
          const target = document.getElementById(id);
          if (target) {
            const offset = window.innerHeight * 0.15; // Leave a bit of space at the top
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: "smooth" });
          }
        }
      }}
      className={`${className ?? ""} cta-wrapper`} // Add base + extra class names
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
