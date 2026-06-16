const cursor = document.getElementById('cursor');
let lastSparkTime = 0;

function createSpark(x, y) {
  const spark = document.createElement('div');
  spark.classList.add('spark');

  const size   = Math.random() * 8 + 4;
  const colors = ['#ff0', 'rgb(255, 238, 203)', 'rgb(255, 252, 227)', '#ffffe7', 'rgb(255, 230, 120)'];
  const color  = colors[Math.floor(Math.random() * colors.length)];
  const dx     = (Math.random() - 0.5) * 30;
  const dy     = Math.random() * 10;

  spark.style.cssText = `
    left: ${x}px;
    top:  ${y + dy}px;
    width: ${size}px;
    height: ${size}px;
    background: ${color};
    box-shadow: 0 0 ${size}px ${color};
    --dx: ${dx}px;
    --dy: ${dy}px;
    animation-duration: ${Math.random() * 0.6 + 0.8}s;
  `;

  document.body.appendChild(spark);
  spark.addEventListener('animationend', () => spark.remove());
}


document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';

  const now = Date.now();
  if (now - lastSparkTime < 50) return;
  lastSparkTime = now;

  createSpark(e.clientX, e.clientY);
});


document.addEventListener('click', (e) => {
  for (let i = 0; i < 12; i++) {
    createSpark(e.clientX, e.clientY);
  }
});