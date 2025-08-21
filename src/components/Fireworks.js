import React, { useEffect, useRef } from 'react';
import './Fireworks.css';

const Fireworks = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Firework particles
    const particles = [];
    const fireworks = [];

    class Particle {
      constructor(x, y, vx, vy, color, life) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.life = life;
        this.maxLife = life;
        this.gravity = 0.02;
        this.friction = 0.98;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.gravity;
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.life--;
      }

      draw() {
        const alpha = (this.life / this.maxLife) * 0.6; // Reduced opacity
        ctx.save();
        ctx.globalAlpha = alpha;
        
        // Add subtle glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Add smaller inner bright core
        ctx.shadowBlur = 3;
        ctx.globalAlpha = alpha * 0.8;
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 0.5, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    class Firework {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.exploded = false;
        this.particles = [];
        
        // Create explosion particles
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#ff4757', '#2ed573', '#ffa502'];
        const particleCount = 50 + Math.random() * 30;
        
        for (let i = 0; i < particleCount; i++) {
          const angle = (Math.PI * 2 * i) / particleCount;
          const velocity = 2 + Math.random() * 4;
          const vx = Math.cos(angle) * velocity;
          const vy = Math.sin(angle) * velocity;
          const color = colors[Math.floor(Math.random() * colors.length)];
          const life = 60 + Math.random() * 40;
          
          this.particles.push(new Particle(x, y, vx, vy, color, life));
        }
      }

      update() {
        this.particles = this.particles.filter(particle => {
          particle.update();
          return particle.life > 0;
        });
      }

      draw() {
        this.particles.forEach(particle => particle.draw());
      }

      isDead() {
        return this.particles.length === 0;
      }
    }

    // Create different types of fireworks
    const createFirework = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height * 0.7 + canvas.height * 0.1;
      
      // 20% chance for special firework
      if (Math.random() < 0.2) {
        fireworks.push(new SpecialFirework(x, y));
      } else {
        fireworks.push(new Firework(x, y));
      }
    };

    // Special firework class for extra spectacular effects
    class SpecialFirework extends Firework {
      constructor(x, y) {
        super(x, y);
        
        // Create multiple rings of particles
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#feca57', '#ff9ff3'];
        const rings = 3;
        
        this.particles = [];
        
        for (let ring = 0; ring < rings; ring++) {
          const particleCount = 20 + ring * 10;
          const baseVelocity = 1 + ring * 1.5;
          
          for (let i = 0; i < particleCount; i++) {
            const angle = (Math.PI * 2 * i) / particleCount;
            const velocity = baseVelocity + Math.random() * 2;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const life = 80 + Math.random() * 40;
            
            this.particles.push(new Particle(x, y, vx, vy, color, life));
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with more fade for subtlety
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw fireworks
      for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].draw();
        
        if (fireworks[i].isDead()) {
          fireworks.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Create fireworks at intervals (less frequent, more subtle)
    const fireworkInterval = setInterval(() => {
      if (Math.random() < 0.4) {
        createFirework();
      }
    }, 2000);

    // Initial spectacular burst
    setTimeout(() => createFirework(), 500);
    setTimeout(() => createFirework(), 1000);
    setTimeout(() => createFirework(), 1500);
    setTimeout(() => createFirework(), 2000);
    setTimeout(() => createFirework(), 2500);

    // Keep fireworks in background - no click interaction needed

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(fireworkInterval);
    };
  }, []);

  return <canvas ref={canvasRef} className="fireworks-canvas" />;
};

export default Fireworks;