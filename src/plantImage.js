// Builds a small illustrated thumbnail (SVG data URI) for a houseplant.
const leafPath = 'M100 140 Q90 85 100 35 Q110 85 100 140Z';

const shapes = {
  spiky: (leaf) =>
    [-40, -20, 0, 20, 40]
      .map((a) => `<path d="${leafPath}" fill="${leaf}" transform="rotate(${a} 100 140)"/>`)
      .join(''),
  round: (leaf) =>
    `<circle cx="100" cy="95" r="34" fill="${leaf}"/><circle cx="68" cy="112" r="26" fill="${leaf}"/>` +
    `<circle cx="132" cy="112" r="26" fill="${leaf}"/><circle cx="100" cy="68" r="24" fill="${leaf}"/>`,
  tall: (leaf) =>
    `<rect x="97" y="40" width="6" height="100" fill="#3b6b47"/>` +
    [55, 80, 105]
      .map(
        (y) =>
          `<ellipse cx="80" cy="${y}" rx="22" ry="9" fill="${leaf}" transform="rotate(-25 80 ${y})"/>` +
          `<ellipse cx="120" cy="${y + 10}" rx="22" ry="9" fill="${leaf}" transform="rotate(25 120 ${y + 10})"/>`
      )
      .join(''),
  bushy: (leaf) =>
    [
      [70, 100], [100, 80], [130, 100], [85, 120], [115, 120], [100, 105], [60, 120], [140, 120],
    ]
      .map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="18" ry="26" fill="${leaf}"/>`)
      .join(''),
  fern: (leaf) =>
    [-75, -50, -25, 0, 25, 50, 75]
      .map(
        (a) =>
          `<path d="M100 140 Q80 90 100 50 Q120 90 100 140Z" fill="${leaf}" transform="rotate(${a} 100 140)"/>`
      )
      .join(''),
  flower: (leaf, bloom) =>
    [-35, 0, 35]
      .map(
        (a) =>
          `<g transform="rotate(${a} 100 140)"><rect x="98" y="60" width="4" height="80" fill="${leaf}"/>` +
          `<circle cx="100" cy="55" r="14" fill="${bloom}"/><circle cx="100" cy="55" r="5" fill="#fff6c2"/></g>`
      )
      .join(''),
};

export function plantImage(shape, leaf, pot = '#c2703d', bloom = '#b57edc') {
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">` +
    `<rect width="200" height="200" fill="#eef6ea"/>` +
    shapes[shape](leaf, bloom) +
    `<path d="M65 140 H135 L125 185 H75Z" fill="${pot}"/>` +
    `<rect x="60" y="134" width="80" height="10" rx="3" fill="${pot}"/>` +
    `</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
