import type { ImageMetadata } from "astro";

const allImages = import.meta.glob<{ default: ImageMetadata }>('/src/**/*.{jpeg,jpg,png,gif,webp,svg}');

const imageRegistry = new Map<string, () => Promise<{ default: ImageMetadata }>>();

for (const [fullPath, importFn] of Object.entries(allImages)) {
    const fileName = fullPath.split('/').pop();
    if (fileName) {
        imageRegistry.set(fileName, importFn);
    }
}

export { imageRegistry };