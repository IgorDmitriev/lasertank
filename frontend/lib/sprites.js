export const drawSolidBlock = (ctx, x, y, w, h) => {
  let color = '#9B9B9B';

  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);

  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 1;
  ctx.shadowColor = "rgba(0, 0, 0, .75)";

  color = '#4A4A4A';
  ctx.fillStyle = color;
  ctx.fillRect(x + 3, y + 3, w - 8, h - 8);
  clearShadows(ctx);
};

export const drawTank = (ctx, x, y, w, h) => {
  let color = '#9B9B9B';
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
  ctx.shadowOffsetX = 4;
  ctx.shadowOffsetY = 4;
  ctx.shadowBlur = 20;
  ctx.shadowColor = "rgba(0, 0, 0, .75)";
  color = '#E5446D';
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x + 60, y + 60, 40, 0, 2 * Math.PI, false);
  ctx.fill();
  clearShadows(ctx);
};

export const drawFlag = (ctx, x, y, w, h) => {
  let color = '#FFF000';
  ctx.shadowOffsetX = 4;
  ctx.shadowOffsetY = 4;
  ctx.shadowBlur = 20;
  ctx.shadowColor = "rgba(0, 0, 0, .75)";
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x + 60, y + 60, 40, 0, 2 * Math.PI, false);
  ctx.fill();
  clearShadows(ctx);
};

export const drawLaser = (ctx, x, y, w, h) => {
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;
  ctx.shadowBlur = 2;
  ctx.shadowColor = "rgba(0, 0, 0, .75)";
  let color = "#E5446D";
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
  clearShadows(ctx);
};

export const drawMovableBlock = (ctx, x, y, w, h) => {
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 10;
  ctx.shadowColor = "rgba(0, 0, 0, .75)";
  let color = '#F48B31';
  ctx.fillStyle = color;
  ctx.fillRect(x + 10, y + 10, w - 20, h - 20);
  clearShadows(ctx);
};

export const drawGround = (ctx, x, y, w, h) => {
  let color = '#9B9B9B';
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
};

export const drawWater = (ctx, x, y, w, h) => {
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 2;
  ctx.shadowColor = "rgba(0, 0, 0, .75)";
  let color = '#3E78B2';
  ctx.fillStyle = color;
  ctx.fillRect(x + 4, y + 4, w - 8, h - 8);
  clearShadows(ctx);
};

const clearShadows = (ctx) => {
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;
  ctx.shadowColor = "rgba(0, 0, 0, .75)";
};
