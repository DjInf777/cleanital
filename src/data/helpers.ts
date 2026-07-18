export const section = (title: string, paragraphs: string[], bullets?: string[]) => ({ title, paragraphs, ...(bullets ? { bullets } : {}) });
