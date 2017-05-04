import File = require('./file');
import Directory = require('./directory');

export function watch(path: string, callback: (event: any, newFilePath: string) => void);
export function closeAllWatchers(): void;
export function getWatchedPaths(): string[];
export {File};
export {Directory};
