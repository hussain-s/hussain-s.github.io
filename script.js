const canvas = document.getElementById("field");
const ctx = canvas.getContext("2d");
const year = document.getElementById("year");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

year.textContent = new Date().getFullYear();

let width = 0;
let height = 0;
let points = [];
let frame = null;

function resize() {
  const scale = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * scale);
  canvas.height = Math.floor(height * scale);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(scale, 0, 0, scale, 0, 0);

  const count = Math.max(18, Math.min(44, Math.floor((width * height) / 36000)));
  points = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.16,
    vy: (Math.random() - 0.5) * 0.16,
  }));
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  ctx.lineWidth = 1;

  points.forEach((point) => {
    point.x += point.vx;
    point.y += point.vy;
    if (point.x < -20 || point.x > width + 20) point.vx *= -1;
    if (point.y < -20 || point.y > height + 20) point.vy *= -1;
  });

  for (let i = 0; i < points.length; i += 1) {
    for (let j = i + 1; j < points.length; j += 1) {
      const a = points[i];
      const b = points[j];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      if (distance < 190) {
        ctx.strokeStyle = `rgba(15, 109, 103, ${(1 - distance / 190) * 0.12})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  points.forEach((point) => {
    ctx.fillStyle = "rgba(139, 61, 43, 0.16)";
    ctx.beginPath();
    ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
    ctx.fill();
  });

  if (!reducedMotion) {
    frame = requestAnimationFrame(draw);
  }
}

function init() {
  resize();
  draw();
}

window.addEventListener("resize", () => {
  if (frame) cancelAnimationFrame(frame);
  init();
});

init();
