const canvas = document.getElementById("field");
const ctx = canvas.getContext("2d");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

let width = 0;
let height = 0;
let nodes = [];
let raf = null;

function resize() {
  const scale = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * scale);
  canvas.height = Math.floor(height * scale);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(scale, 0, 0, scale, 0, 0);

  const count = Math.max(42, Math.min(96, Math.floor((width * height) / 18000)));
  nodes = Array.from({ length: count }, (_, index) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.28,
    vy: (Math.random() - 0.5) * 0.28,
    r: index % 7 === 0 ? 1.8 : 1.1,
  }));
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "rgba(7, 9, 13, 0.82)";
  ctx.fillRect(0, 0, width, height);

  for (const node of nodes) {
    node.x += node.vx;
    node.y += node.vy;

    if (node.x < 0 || node.x > width) node.vx *= -1;
    if (node.y < 0 || node.y > height) node.vy *= -1;
  }

  for (let i = 0; i < nodes.length; i += 1) {
    const a = nodes[i];
    for (let j = i + 1; j < nodes.length; j += 1) {
      const b = nodes[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 150) {
        const alpha = (1 - distance / 150) * 0.23;
        ctx.strokeStyle = `rgba(57, 231, 255, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  for (const node of nodes) {
    const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 14);
    gradient.addColorStop(0, "rgba(140, 255, 122, 0.9)");
    gradient.addColorStop(0.45, "rgba(57, 231, 255, 0.45)");
    gradient.addColorStop(1, "rgba(57, 231, 255, 0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(node.x, node.y, 14, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "rgba(238, 245, 255, 0.75)";
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
    ctx.fill();
  }

  if (!prefersReducedMotion) {
    raf = requestAnimationFrame(draw);
  }
}

function initializeField() {
  resize();
  draw();
}

window.addEventListener("resize", () => {
  if (raf) cancelAnimationFrame(raf);
  initializeField();
});

initializeField();
