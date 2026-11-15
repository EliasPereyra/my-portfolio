/**
 * The home page reads as a set of drawing sheets. Each section header shows
 * its sheet number out of the total.
 */
export const SHEETS = {
  hero: 1,
  capabilities: 2,
  portfolio: 3,
  experience: 4,
  about: 5,
  contributions: 6,
  contact: 7,
} as const;

export const SHEET_TOTAL = Object.keys(SHEETS).length;

export type SheetId = keyof typeof SHEETS;

export const sheetNumber = (id: SheetId) =>
  String(SHEETS[id]).padStart(2, "0");
