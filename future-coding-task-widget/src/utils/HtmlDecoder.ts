import * as entities from "entities";

/*
 * Safely decode strings containing HTML characters, e.g., "&#36;" -> "$"
 */
export const decodeHtml = (s: string): string => (
    entities.decodeHTML(s)
)
