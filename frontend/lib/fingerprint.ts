export function getVisitorId(): string {
  let stored = sessionStorage.getItem('visitor_fp');
  if (stored) return stored;

  const canvas = document.createElement('canvas');
  canvas.width = 200;
  canvas.height = 50;
  const ctx = canvas.getContext('2d')!;
  ctx.textBaseline = 'top';
  ctx.font = '14px Arial';
  ctx.fillStyle = '#f60';
  ctx.fillRect(125, 1, 62, 20);
  ctx.fillStyle = '#069';
  ctx.fillText('servermc.id', 2, 15);
  const canvasFp = canvas.toDataURL();

  const components = [
    navigator.userAgent,
    navigator.language,
    screen.colorDepth,
    canvasFp,
  ].join('|||');

  let hash = 0;
  for (let i = 0; i < components.length; i++) {
    const char = components.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }

  const fp = hash.toString(36);
  sessionStorage.setItem('visitor_fp', fp);
  return fp;
}
