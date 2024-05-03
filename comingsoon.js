const container = document.querySelector('.container');

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');

  const size = Math.random() * 3 + 5;
  snowflake.style.width = size + 'px';
  snowflake.style.height = size + 'px';

  const positionX = Math.random() * window.innerWidth;
  const positionY = Math.random() * -window.innerHeight;

  snowflake.style.left = positionX + 'px';
  snowflake.style.top = positionY + 'px';

  const speed = Math.random() * 5 + 2;
  const angle = Math.random() * 360;

  snowflake.style.animation = `fall ${speed}s linear infinite`;
  snowflake.style.transform = `rotateZ(${angle}deg)`;

  container.appendChild(snowflake);
}

function fallAnimation() {
  const snowflakes = document.querySelectorAll('.snowflake');

  snowflakes.forEach(snowflake => {
    const top = parseFloat(snowflake.style.top) + 5;
    snowflake.style.top = top + 'px';

    if (top > window.innerHeight) {
      snowflake.parentNode.removeChild(snowflake);
    }
  });
}

setInterval(createSnowflake, 20);
setInterval(fallAnimation, 20);


