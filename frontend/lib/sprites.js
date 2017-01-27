export const drawSolidBlock = (ctx, x, y, w, h) => {
  let color = '#A2A9AF';

  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);

  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 1;
  ctx.shadowColor = "rgba(0, 0, 0, .75)";

  color = '#747E80';
  ctx.fillStyle = color;
  ctx.fillRect(x + 3, y + 3, w - 8, h - 8);
  clearShadows(ctx);
};

export const drawTank = (ctx, x, y, w, h) => {
  let color = '#A2A9AF';
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 1;
  ctx.shadowColor = "rgba(0, 0, 0, .75)";
  color = '#009A31';
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x + 60, y + 60, 40, 0, 2 * Math.PI, false);
  ctx.fill();
  clearShadows(ctx);
};

export const drawFlag = (ctx, x, y, w, h) => {
  let color = '#E5446D';
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 5;
  ctx.shadowColor = "rgba(0, 0, 0, .75)";
  ctx.fillStyle = color;
  ctx.fillRect(x + 25, y + 20, 5, 90);
  ctx.beginPath();
  ctx.moveTo(x + 35, y + 25);
  ctx.lineTo(x + 95, y + 25);
  ctx.lineTo(x + 75, y + 45);
  ctx.lineTo(x + 95, y + 65);
  ctx.lineTo(x + 35, y + 65);
  ctx.fill();

  clearShadows(ctx);
};

export const drawLaser = (ctx, x, y, w, h) => {
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;
  ctx.shadowBlur = 2;
  ctx.shadowColor = "rgba(0, 0, 0, .75)";
  let color = "#009A31";
  ctx.beginPath();
  ctx.arc(x + 20, y + 20, w / 2, 0, 2 * Math.PI, false);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();

  clearShadows(ctx);
};

export const drawMovableBlock = (ctx, x, y, w, h) => {
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 10;
  ctx.shadowColor = "rgba(0, 0, 0, .75)";
  let color = '#EDAA53';
  ctx.fillStyle = color;
  ctx.fillRect(x + 10, y + 10, w - 20, h - 20);
  clearShadows(ctx);
};

export const drawGround = (ctx, x, y, w, h) => {
  let color = '#A2A9AF';
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
};

export const drawWater = (ctx, x, y, w, h) => {
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;
  ctx.shadowColor = "rgba(0, 0, 0, .75)";
  let color = '#1B6AA5';
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
  clearShadows(ctx);
};

const clearShadows = (ctx) => {
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;
  ctx.shadowColor = "rgba(0, 0, 0, .75)";
};
