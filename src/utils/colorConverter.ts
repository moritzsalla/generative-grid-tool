function componentToHex(c: number): string {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

/**
 * Converts RGB to HEX values.
 */

export function rgbToHex(r: number, g: number, b: number) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

/**
 * Converts HEY to RGB values.
 */

export function hexToRgb(hex: string): { r: number; g: number; b: number } {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
}
