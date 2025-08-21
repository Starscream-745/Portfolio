import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./GeometricBackground.css";

const GeometricBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // 3D Geometric shapes
    const shapes = [];
    const glowingOrbs = [];

    class Shape3D {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 500 + 100;
        this.rotationX = 0;
        this.rotationY = 0;
        this.rotationZ = 0;
        this.rotationSpeedX = (Math.random() - 0.5) * 0.02;
        this.rotationSpeedY = (Math.random() - 0.5) * 0.02;
        this.rotationSpeedZ = (Math.random() - 0.5) * 0.02;
        this.size = Math.random() * 80 + 40;
        this.type = Math.floor(Math.random() * 3); // 0: cube, 1: pyramid, 2: diamond
        this.color = this.getRandomColor();
        this.opacity = Math.random() * 0.3 + 0.1;
        this.drift = {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5,
          z: (Math.random() - 0.5) * 0.3,
        };
      }

      getRandomColor() {
        const colors = [
          "rgba(255, 107, 107, 0.6)",
          "rgba(78, 205, 196, 0.6)",
          "rgba(69, 183, 209, 0.6)",
          "rgba(255, 193, 7, 0.6)",
          "rgba(156, 39, 176, 0.6)",
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.rotationX += this.rotationSpeedX;
        this.rotationY += this.rotationSpeedY;
        this.rotationZ += this.rotationSpeedZ;

        this.x += this.drift.x;
        this.y += this.drift.y;
        this.z += this.drift.z;

        // Wrap around screen
        if (this.x < -100) this.x = canvas.width + 100;
        if (this.x > canvas.width + 100) this.x = -100;
        if (this.y < -100) this.y = canvas.height + 100;
        if (this.y > canvas.height + 100) this.y = -100;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);

        const scale = 300 / (300 + this.z);
        ctx.scale(scale, scale);

        ctx.globalAlpha = this.opacity;
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color.replace("0.6", "0.1");
        ctx.lineWidth = 2;
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;

        if (this.type === 0) {
          this.drawCube();
        } else if (this.type === 1) {
          this.drawPyramid();
        } else {
          this.drawDiamond();
        }

        ctx.restore();
      }

      drawCube() {
        const size = this.size;
        const half = size / 2;

        // Simple 3D cube projection
        ctx.beginPath();
        ctx.rect(-half, -half, size, size);
        ctx.fill();
        ctx.stroke();

        // Add 3D effect with offset lines
        ctx.beginPath();
        ctx.moveTo(-half, -half);
        ctx.lineTo(-half + 20, -half - 20);
        ctx.lineTo(half + 20, -half - 20);
        ctx.lineTo(half, -half);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(half, -half);
        ctx.lineTo(half + 20, -half - 20);
        ctx.lineTo(half + 20, half - 20);
        ctx.lineTo(half, half);
        ctx.stroke();
      }

      drawPyramid() {
        const size = this.size;
        const half = size / 2;

        ctx.beginPath();
        ctx.moveTo(0, -half);
        ctx.lineTo(-half, half);
        ctx.lineTo(half, half);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // 3D effect
        ctx.beginPath();
        ctx.moveTo(0, -half);
        ctx.lineTo(20, -half + 20);
        ctx.lineTo(half + 20, half + 20);
        ctx.lineTo(half, half);
        ctx.stroke();
      }

      drawDiamond() {
        const size = this.size;
        const half = size / 2;

        ctx.beginPath();
        ctx.moveTo(0, -half);
        ctx.lineTo(half, 0);
        ctx.lineTo(0, half);
        ctx.lineTo(-half, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // 3D effect
        ctx.beginPath();
        ctx.moveTo(0, -half);
        ctx.lineTo(15, -half + 15);
        ctx.lineTo(half + 15, 15);
        ctx.lineTo(half, 0);
        ctx.stroke();
      }
    }

    class GlowingOrb {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 30 + 20;
        this.baseRadius = this.radius;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.color = this.getRandomGlowColor();
        this.drift = {
          x: (Math.random() - 0.5) * 0.3,
          y: (Math.random() - 0.5) * 0.3,
        };
        this.opacity = Math.random() * 0.8 + 0.2;
      }

      getRandomGlowColor() {
        const colors = [
          { r: 255, g: 107, b: 107 },
          { r: 78, g: 205, b: 196 },
          { r: 69, g: 183, b: 209 },
          { r: 255, g: 193, b: 7 },
          { r: 156, g: 39, b: 176 },
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.drift.x;
        this.y += this.drift.y;
        this.pulsePhase += this.pulseSpeed;
        this.radius = this.baseRadius + Math.sin(this.pulsePhase) * 10;

        // Wrap around screen
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.y < -50) this.y = canvas.height + 50;
        if (this.y > canvas.height + 50) this.y = -50;
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius * 2
        );

        gradient.addColorStop(
          0,
          `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`
        );
        gradient.addColorStop(
          0.5,
          `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${
            this.opacity * 0.3
          })`
        );
        gradient.addColorStop(
          1,
          `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`
        );

        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
        ctx.fill();

        // Inner bright core
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${
          this.color.b
        }, ${this.opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 0.3, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // Initialize shapes and orbs
    for (let i = 0; i < 8; i++) {
      shapes.push(new Shape3D());
    }

    for (let i = 0; i < 5; i++) {
      glowingOrbs.push(new GlowingOrb());
    }

    const animate = () => {
      ctx.fillStyle = "rgba(10, 10, 20, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw glowing orbs first (background)
      glowingOrbs.forEach((orb) => {
        orb.update();
        orb.draw();
      });

      // Update and draw 3D shapes
      shapes.forEach((shape) => {
        shape.update();
        shape.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="geometric-background">
      <canvas ref={canvasRef} className="geometric-canvas" />

      {/* Additional CSS-based geometric elements */}
      <motion.div
        className="floating-cube"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="floating-pyramid"
        animate={{
          rotateZ: [0, 360],
          x: [0, 100, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="glowing-sphere"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default GeometricBackground;
