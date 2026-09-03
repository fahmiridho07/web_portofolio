import { imageMeta } from "./images.generated";

export type { ImageMeta } from "./images.generated";

export function getImageMeta(src: string) {
  return imageMeta[src];
}

const proseImageSizes = "(max-width: 900px) 100vw, 52rem";

function getImageVariantWidths(src: string) {
  const dotIndex = src.lastIndexOf(".");
  if (dotIndex === -1) {
    return [];
  }

  const base = src.slice(0, dotIndex);
  const ext = src.slice(dotIndex);
  const widths: number[] = [];

  for (const path of Object.keys(imageMeta)) {
    if (!path.startsWith(`${base}-`) || !path.endsWith(ext)) {
      continue;
    }

    const suffix = path.slice(base.length + 1, -ext.length);
    if (/^\d+$/.test(suffix)) {
      widths.push(Number(suffix));
    }
  }

  return [...new Set(widths)].sort((a, b) => a - b);
}

function buildResponsiveSrcset(
  src: string,
  widths: number[],
  fullWidth?: number,
) {
  if (widths.length <= 1) {
    return undefined;
  }

  const dotIndex = src.lastIndexOf(".");
  const base = src.slice(0, dotIndex);
  const ext = src.slice(dotIndex);

  return widths
    .map((width) => {
      const path = width === fullWidth ? src : `${base}-${width}${ext}`;
      return `${path} ${width}w`;
    })
    .join(", ");
}

export function getResponsiveImageSources(
  src: string,
  sizes = proseImageSizes,
) {
  const meta = getImageMeta(src);
  const variantWidths = getImageVariantWidths(src);
  const widths =
    variantWidths.length > 0
      ? [
          ...new Set(
            [...variantWidths, meta?.width].filter((value): value is number =>
              Boolean(value),
            ),
          ),
        ].sort((a, b) => a - b)
      : [];

  return {
    src,
    srcset: buildResponsiveSrcset(src, widths, meta?.width),
    sizes,
    width: meta?.width,
    height: meta?.height,
  };
}
