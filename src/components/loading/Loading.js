import React from 'react';

import './Loading.scss';

const Loading = () => {
  return (
    <div className="spinner">
      <svg xmlns="http://www.w3.org/2000/svg" width="128px" height="128px" viewBox="0 0 128 128">
        <rect x="0" y="0" width="100%" height="100%" fill="transparent" />
        <g>
          <circle cx="16" cy="64" r="16" fill="#4F6DF5"/>
          <circle cx="16" cy="64" r="16" fill="#8a9ef8" transform="rotate(45,64,64)"/>
          <circle cx="16" cy="64" r="16" fill="#b5c2fb" transform="rotate(90,64,64)"/>
          <circle cx="16" cy="64" r="16" fill="#dce2fd" transform="rotate(135,64,64)"/>
          <circle cx="16" cy="64" r="16" fill="#eaeefe" transform="rotate(180,64,64)"/>
          <circle cx="16" cy="64" r="16" fill="#eaeefe" transform="rotate(225,64,64)"/>
          <circle cx="16" cy="64" r="16" fill="#eaeefe" transform="rotate(270,64,64)"/>
          <circle cx="16" cy="64" r="16" fill="#eaeefe" transform="rotate(315,64,64)"/>
          <animateTransform attributeName="transform" type="rotate" values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64" calcMode="discrete" dur="880ms" repeatCount="indefinite"></animateTransform>
        </g>
      </svg>
    </div>
  );
};

export default Loading;
