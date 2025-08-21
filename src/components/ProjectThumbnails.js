import React from 'react';

export const TrainReservationThumbnail = () => (
  <svg viewBox="0 0 400 250" className="project-thumbnail">
    <defs>
      <linearGradient id="trainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4A90E2" />
        <stop offset="100%" stopColor="#357ABD" />
      </linearGradient>
      <linearGradient id="calendarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6B6B" />
        <stop offset="100%" stopColor="#E55A5A" />
      </linearGradient>
    </defs>
    
    {/* Background */}
    <rect width="400" height="250" fill="#2C3E50" />
    
    {/* Title */}
    <text x="200" y="40" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">
      Train Reservation
    </text>
    
    {/* Train */}
    <g transform="translate(50, 100)">
      {/* Train body */}
      <rect x="0" y="20" width="120" height="60" rx="15" fill="url(#trainGradient)" />
      {/* Train windows */}
      <rect x="15" y="35" width="25" height="20" rx="3" fill="#1A252F" />
      <rect x="50" y="35" width="25" height="20" rx="3" fill="#1A252F" />
      <rect x="85" y="35" width="25" height="20" rx="3" fill="#1A252F" />
      {/* Train lights */}
      <circle cx="15" cy="65" r="5" fill="#FFD93D" />
      <circle cx="105" cy="65" r="5" fill="#FFD93D" />
      {/* Train wheels */}
      <circle cx="25" cy="85" r="8" fill="#34495E" />
      <circle cx="95" cy="85" r="8" fill="#34495E" />
      {/* Train tracks */}
      <rect x="-20" y="95" width="160" height="4" fill="#7F8C8D" />
      <rect x="-15" y="102" width="150" height="2" fill="#95A5A6" />
    </g>
    
    {/* Calendar */}
    <g transform="translate(220, 80)">
      {/* Calendar body */}
      <rect x="0" y="20" width="80" height="90" rx="8" fill="#ECF0F1" />
      {/* Calendar header */}
      <rect x="0" y="20" width="80" height="25" rx="8" fill="url(#calendarGradient)" />
      {/* Calendar rings */}
      <rect x="15" y="10" width="8" height="20" rx="4" fill="#7F8C8D" />
      <rect x="57" y="10" width="8" height="20" rx="4" fill="#7F8C8D" />
      {/* Calendar grid */}
      <g fill="#BDC3C7">
        <rect x="10" y="55" width="12" height="10" rx="2" />
        <rect x="27" y="55" width="12" height="10" rx="2" />
        <rect x="44" y="55" width="12" height="10" rx="2" />
        <rect x="61" y="55" width="12" height="10" rx="2" />
        <rect x="10" y="70" width="12" height="10" rx="2" />
        <rect x="27" y="70" width="12" height="10" rx="2" />
        <rect x="44" y="70" width="12" height="10" rx="2" />
        <rect x="61" y="70" width="12" height="10" rx="2" />
        <rect x="10" y="85" width="12" height="10" rx="2" />
        <rect x="27" y="85" width="12" height="10" rx="2" />
        <rect x="44" y="85" width="12" height="10" rx="2" />
        <rect x="61" y="85" width="12" height="10" rx="2" />
      </g>
    </g>
    
    {/* Check mark */}
    <g transform="translate(320, 120)">
      <circle cx="20" cy="20" r="20" fill="#2ECC71" />
      <path d="M10 20 L17 27 L30 13" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export const ATMInterfaceThumbnail = () => (
  <svg viewBox="0 0 400 250" className="project-thumbnail">
    <defs>
      <linearGradient id="atmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34495E" />
        <stop offset="100%" stopColor="#2C3E50" />
      </linearGradient>
      <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1ABC9C" />
        <stop offset="100%" stopColor="#16A085" />
      </linearGradient>
    </defs>
    
    {/* Background */}
    <rect width="400" height="250" fill="#1A252F" />
    
    {/* Title */}
    <text x="200" y="220" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">
      ATM Interface System
    </text>
    
    {/* ATM Machine */}
    <g transform="translate(150, 40)">
      {/* ATM body */}
      <rect x="0" y="0" width="100" height="140" rx="10" fill="url(#atmGradient)" />
      {/* ATM screen */}
      <rect x="10" y="15" width="80" height="50" rx="5" fill="url(#screenGradient)" />
      {/* Dollar sign on screen */}
      <text x="50" y="45" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">$</text>
      
      {/* Keypad */}
      <g fill="#7F8C8D">
        <rect x="15" y="75" width="15" height="12" rx="2" />
        <rect x="35" y="75" width="15" height="12" rx="2" />
        <rect x="55" y="75" width="15" height="12" rx="2" />
        <rect x="75" y="75" width="15" height="12" rx="2" />
        
        <rect x="15" y="92" width="15" height="12" rx="2" />
        <rect x="35" y="92" width="15" height="12" rx="2" />
        <rect x="55" y="92" width="15" height="12" rx="2" />
        <rect x="75" y="92" width="15" height="12" rx="2" />
        
        <rect x="15" y="109" width="15" height="12" rx="2" />
        <rect x="35" y="109" width="15" height="12" rx="2" />
        <rect x="55" y="109" width="15" height="12" rx="2" />
        <rect x="75" y="109" width="15" height="12" rx="2" />
      </g>
      
      {/* Card slot */}
      <rect x="10" y="125" width="80" height="8" rx="4" fill="#2C3E50" />
    </g>
    
    {/* Credit Card */}
    <g transform="translate(80, 120)">
      <rect x="0" y="0" width="50" height="30" rx="5" fill="#1ABC9C" />
      <circle cx="10" cy="15" r="3" fill="white" />
      <text x="45" y="20" textAnchor="end" fill="white" fontSize="8">$</text>
    </g>
    
    {/* Money/Coins */}
    <g transform="translate(280, 100)">
      <circle cx="15" cy="15" r="15" fill="#F39C12" />
      <text x="15" y="20" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">$</text>
      <circle cx="35" cy="25" r="12" fill="#E67E22" />
      <text x="35" y="30" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">$</text>
    </g>
  </svg>
);

export const LibraryManagementThumbnail = () => (
  <svg viewBox="0 0 400 250" className="project-thumbnail">
    <defs>
      <linearGradient id="libraryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8E44AD" />
        <stop offset="100%" stopColor="#9B59B6" />
      </linearGradient>
      <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E74C3C" />
        <stop offset="100%" stopColor="#C0392B" />
      </linearGradient>
      <linearGradient id="shelfGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B4513" />
        <stop offset="100%" stopColor="#A0522D" />
      </linearGradient>
    </defs>
    
    {/* Background */}
    <rect width="400" height="250" fill="url(#libraryGradient)" />
    
    {/* Title */}
    <text x="200" y="30" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">
      Library Management System
    </text>
    
    {/* Bookshelf */}
    <g transform="translate(50, 70)">
      {/* Shelf */}
      <rect x="0" y="80" width="300" height="15" fill="url(#shelfGradient)" />
      <rect x="0" y="130" width="300" height="15" fill="url(#shelfGradient)" />
      
      {/* Books on top shelf */}
      <rect x="20" y="50" width="25" height="80" fill="#E74C3C" />
      <rect x="50" y="45" width="25" height="85" fill="#3498DB" />
      <rect x="80" y="55" width="25" height="75" fill="#2ECC71" />
      <rect x="110" y="40" width="25" height="90" fill="#F39C12" />
      <rect x="140" y="50" width="25" height="80" fill="#9B59B6" />
      <rect x="170" y="45" width="25" height="85" fill="#1ABC9C" />
      <rect x="200" y="55" width="25" height="75" fill="#E67E22" />
      <rect x="230" y="50" width="25" height="80" fill="#34495E" />
      <rect x="260" y="45" width="25" height="85" fill="#E91E63" />
      
      {/* Books on bottom shelf */}
      <rect x="20" y="100" width="25" height="80" fill="#FF5722" />
      <rect x="50" y="95" width="25" height="85" fill="#607D8B" />
      <rect x="80" y="105" width="25" height="75" fill="#795548" />
      <rect x="110" y="90" width="25" height="90" fill="#009688" />
      <rect x="140" y="100" width="25" height="80" fill="#673AB7" />
      <rect x="170" y="95" width="25" height="85" fill="#FF9800" />
      <rect x="200" y="105" width="25" height="75" fill="#4CAF50" />
      <rect x="230" y="100" width="25" height="80" fill="#2196F3" />
      <rect x="260" y="95" width="25" height="85" fill="#F44336" />
      
      {/* Book spines details */}
      <g fill="white" fontSize="8">
        <text x="32" y="90" textAnchor="middle" transform="rotate(-90 32 90)">JAVA</text>
        <text x="62" y="90" textAnchor="middle" transform="rotate(-90 62 90)">OOP</text>
        <text x="92" y="90" textAnchor="middle" transform="rotate(-90 92 90)">DSA</text>
        <text x="122" y="90" textAnchor="middle" transform="rotate(-90 122 90)">DB</text>
      </g>
    </g>
    
    {/* Computer/Console */}
    <g transform="translate(80, 180)">
      <rect x="0" y="0" width="80" height="50" rx="5" fill="#2C3E50" />
      <rect x="5" y="5" width="70" height="35" rx="3" fill="#1ABC9C" />
      <text x="40" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">CONSOLE</text>
      <text x="40" y="35" textAnchor="middle" fill="white" fontSize="8">Library System</text>
    </g>
    
    {/* User icon */}
    <g transform="translate(250, 180)">
      <circle cx="20" cy="15" r="12" fill="#ECF0F1" />
      <circle cx="20" cy="10" r="5" fill="#BDC3C7" />
      <path d="M 10 20 Q 20 15 30 20 L 30 30 L 10 30 Z" fill="#BDC3C7" />
    </g>
    
    {/* Management arrows */}
    <g transform="translate(180, 190)" fill="#F39C12">
      <path d="M 0 10 L 10 5 L 10 8 L 20 8 L 20 12 L 10 12 L 10 15 Z" />
      <path d="M 40 5 L 30 10 L 30 7 L 20 7 L 20 3 L 30 3 L 30 0 Z" />
    </g>
  </svg>
);

export const DSAVisualizerThumbnail = () => (
  <svg viewBox="0 0 400 250" className="project-thumbnail">
    <defs>
      <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2C3E50" />
        <stop offset="100%" stopColor="#34495E" />
      </linearGradient>
      <linearGradient id="arrayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E74C3C" />
        <stop offset="100%" stopColor="#C0392B" />
      </linearGradient>
    </defs>
    
    {/* Background */}
    <rect width="400" height="250" fill="url(#codeGradient)" />
    
    {/* Title */}
    <text x="200" y="30" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">
      DSA Visualizer
    </text>
    
    {/* Array visualization */}
    <g transform="translate(50, 80)">
      {/* Array elements */}
      <rect x="0" y="0" width="40" height="60" fill="#3498DB" stroke="white" strokeWidth="2" />
      <text x="20" y="35" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">5</text>
      
      <rect x="50" y="0" width="40" height="60" fill="url(#arrayGradient)" stroke="white" strokeWidth="2" />
      <text x="70" y="35" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">2</text>
      
      <rect x="100" y="0" width="40" height="60" fill="#2ECC71" stroke="white" strokeWidth="2" />
      <text x="120" y="35" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">8</text>
      
      <rect x="150" y="0" width="40" height="60" fill="#F39C12" stroke="white" strokeWidth="2" />
      <text x="170" y="35" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">1</text>
      
      <rect x="200" y="0" width="40" height="60" fill="#9B59B6" stroke="white" strokeWidth="2" />
      <text x="220" y="35" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">9</text>
      
      <rect x="250" y="0" width="40" height="60" fill="#1ABC9C" stroke="white" strokeWidth="2" />
      <text x="270" y="35" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">3</text>
    </g>
    
    {/* Sorting arrows */}
    <g transform="translate(50, 160)" fill="#E74C3C">
      <path d="M 70 0 L 80 10 L 75 10 L 75 20 L 65 20 L 65 10 L 60 10 Z" />
      <path d="M 170 0 L 180 10 L 175 10 L 175 20 L 165 20 L 165 10 L 160 10 Z" />
    </g>
    
    {/* Algorithm steps */}
    <g transform="translate(50, 200)">
      <rect x="0" y="0" width="300" height="25" rx="5" fill="rgba(255,255,255,0.1)" />
      <text x="10" y="17" fill="white" fontSize="12">Step 2: Comparing elements 2 and 1, swapping...</text>
    </g>
    
    {/* Play button */}
    <g transform="translate(350, 100)">
      <circle cx="0" cy="0" r="20" fill="#2ECC71" />
      <path d="M -8 -10 L -8 10 L 12 0 Z" fill="white" />
    </g>
  </svg>
);