import sharp from "sharp";

async function processImage(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  // Create RGBA buffer
  const rgba = Buffer.alloc(width * height * 4);

  // Background color reference (corner average)
  const bgR = 236;
  const bgG = 236;
  const bgB = 234;

  // Visited array for BFS flood fill
  const visited = new Uint8Array(width * height);
  const queue = new Int32Array(width * height * 2);
  let qHead = 0;
  let qTail = 0;

  // Add all border pixels to queue
  for (let x = 0; x < width; x++) {
    // Top border
    queue[qTail++] = x;
    queue[qTail++] = 0;
    visited[x] = 1;

    // Bottom border
    const bottomY = height - 1;
    queue[qTail++] = x;
    queue[qTail++] = bottomY;
    visited[bottomY * width + x] = 1;
  }

  for (let y = 0; y < height; y++) {
    // Left border
    queue[qTail++] = 0;
    queue[qTail++] = y;
    visited[y * width] = 1;

    // Right border
    const rightX = width - 1;
    queue[qTail++] = rightX;
    queue[qTail++] = y;
    visited[y * width + rightX] = 1;
  }

  // Also add handle interior hole
  // Handle interior is around x = 700 to 760, y = 200 to 300 (top handle) and x = 680 to 740, y = 600 to 750 (bottom handle)
  const seeds = [
    [720, 240], // dripper handle hole
    [710, 670], // carafe handle hole
  ];

  for (const [sx, sy] of seeds) {
    if (sx >= 0 && sx < width && sy >= 0 && sy < height) {
      queue[qTail++] = sx;
      queue[qTail++] = sy;
      visited[sy * width + sx] = 1;
    }
  }

  // BFS Flood fill
  while (qHead < qTail) {
    const x = queue[qHead++];
    const y = queue[qHead++];
    // Check 4 neighbors
    const neighbors = [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIdx = ny * width + nx;
        if (!visited[nIdx]) {
          const nr = data[nIdx * channels];
          const ng = data[nIdx * channels + 1];
          const nb = data[nIdx * channels + 2];

          // Check if neighbor is background-like: near neutral and bright
          const maxDiff = Math.max(
            Math.abs(nr - bgR),
            Math.abs(ng - bgG),
            Math.abs(nb - bgB),
          );
          const isNeutral = Math.abs(nr - ng) < 14 && Math.abs(ng - nb) < 14;

          // If bright neutral background
          if (nr > 218 && ng > 218 && nb > 215 && isNeutral && maxDiff < 36) {
            visited[nIdx] = 1;
            queue[qTail++] = nx;
            queue[qTail++] = ny;
          }
        }
      }
    }
  }

  // Construct RGBA buffer with soft edge feathering
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pIdx = y * width + x;
      const srcIdx = pIdx * channels;
      const dstIdx = pIdx * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];

      if (visited[pIdx]) {
        // Transparent background
        rgba[dstIdx] = r;
        rgba[dstIdx + 1] = g;
        rgba[dstIdx + 2] = b;
        rgba[dstIdx + 3] = 0;
      } else {
        // Foreground object
        rgba[dstIdx] = r;
        rgba[dstIdx + 1] = g;
        rgba[dstIdx + 2] = b;

        // Check if on the edge of visited mask for antialiasing
        let bgNeighborCount = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const ny = y + dy;
            const nx = x + dx;
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              if (visited[ny * width + nx]) bgNeighborCount++;
            }
          }
        }

        // Clean up any remaining soft ground shadow remnants below the glass carafe
        if (y > 915 && r > 165 && g > 165 && b > 165) {
          rgba[dstIdx + 3] = 0;
        } else if (bgNeighborCount > 0) {
          rgba[dstIdx + 3] = Math.round(255 * (1 - bgNeighborCount / 10));
        } else {
          rgba[dstIdx + 3] = 255;
        }
      }
    }
  }

  await sharp(rgba, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .webp({ quality: 95, lossless: true })
    .toFile(outputPath);

  console.log("Saved transparent image to:", outputPath);
}

const emptyPath =
  "C:/Users/Lenovo/.gemini/antigravity/brain/6b10deab-8d0a-4aa2-b339-8a42edea36d3/v60_empty_stage_1788432030251.jpg";
const fullPath =
  "C:/Users/Lenovo/.gemini/antigravity/brain/6b10deab-8d0a-4aa2-b339-8a42edea36d3/v60_full_stage_1788432053560.jpg";

await processImage(
  emptyPath,
  "public/assets/floating/v60-empty-transparent.webp",
);
await processImage(
  fullPath,
  "public/assets/floating/v60-full-transparent.webp",
);
