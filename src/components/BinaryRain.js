import React, { useEffect, useRef } from 'react';
import './BinaryRain.css';

const BinaryRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Binary rain configuration - 10% more dense
    const columns = Math.floor(canvas.width / 13.5);
    const drops = [];
    
    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height;
    }

    // Mix of binary and coding characters for variety
    const binaryChars = ['0', '1', '0', '1', '0', '1', '{', '}', '<', '>', '/', '\\', '|', '-', '+', '='];
    const colors = [
      '#00ff41', // Matrix green
      '#008f11', // Darker green
      '#00ff41', // Bright green
      '#40ff00', // Lime green
      '#80ff00', // Yellow-green
      '#00cc33'  // Medium green
    ];

    // Enhanced binary rain with varying speeds and intensities
    const columnSpeeds = [];
    const columnIntensities = [];
    
    // Initialize column properties
    for (let i = 0; i < columns; i++) {
      columnSpeeds[i] = 0.5 + Math.random() * 2; // Speed between 0.5 and 2.5
      columnIntensities[i] = 0.3 + Math.random() * 0.7; // Intensity between 0.3 and 1
    }

    const draw = () => {
      // Create fade effect (even less fade for 20% more visibility)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.016)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < drops.length; i++) {
        // Create trail effect - draw multiple characters in column
        const trailLength = 8 + Math.random() * 12;
        
        for (let j = 0; j < trailLength; j++) {
          const y = drops[i] - j * 13.5;
          
          if (y > 0 && y < canvas.height) {
            // Random character - mostly binary, occasionally programming symbols
            let char;
            if (Math.random() < 0.85) {
              // 85% chance for binary
              char = Math.random() < 0.5 ? '0' : '1';
            } else {
              // 15% chance for coding symbols
              const codingChars = ['{', '}', '<', '>', '/', '\\', '|', '-', '+', '=', ';', '(', ')'];
              char = codingChars[Math.floor(Math.random() * codingChars.length)];
            }
            
            // Calculate alpha based on position in trail
            const alpha = (1 - j / trailLength) * columnIntensities[i];
            
            // Brightest at the front of the trail (20% brighter)
            if (j === 0) {
              // Special glow for coding symbols
              if (['{', '}', '<', '>', '=', ';'].includes(char)) {
                ctx.fillStyle = `rgba(0, 255, 255, ${Math.min(alpha * 1.8, 1)})`;
                ctx.shadowColor = '#00ffff';
              } else {
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(alpha * 1.44, 1)})`;
                ctx.shadowColor = '#00ff41';
              }
              ctx.font = 'bold 18px monospace';
              ctx.shadowBlur = 22;
            } else if (j < 4) {
              ctx.fillStyle = `rgba(0, 255, 65, ${Math.min(alpha * 1.56, 1)})`;
              ctx.font = 'bold 15px monospace';
              ctx.shadowBlur = 13;
              ctx.shadowColor = '#00ff41';
            } else {
              const greenIntensity = Math.floor(255 * alpha * 1.44);
              ctx.fillStyle = `rgba(0, ${Math.min(greenIntensity, 255)}, 0, ${Math.min(alpha * 1.32, 1)})`;
              ctx.font = '13px monospace';
              ctx.shadowBlur = 7;
              ctx.shadowColor = `rgba(0, ${Math.min(greenIntensity, 255)}, 0, ${alpha * 1.2})`;
            }
            
            // Draw character
            ctx.fillText(char, i * 13.5, y);
          }
        }
        
        // Reset drop to top with random delay
        if (drops[i] > canvas.height + 100) {
          drops[i] = -Math.random() * 500;
          columnSpeeds[i] = 0.5 + Math.random() * 2;
          columnIntensities[i] = 0.3 + Math.random() * 0.7;
        }
        
        // Move drop down at varying speeds
        drops[i] += columnSpeeds[i] * 13.5;
      }
    };

    const interval = setInterval(draw, 60);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(interval);
    };
  }, []);

  return <canvas ref={canvasRef} className="binary-rain-canvas" />;
};

export default BinaryRain;