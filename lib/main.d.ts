import FileS = require('./file');
import DirectoryS = require('./directory');

declare namespace pathwatcher {
  export function watch(path: string, callback: (event: any, newFilePath: string) => void);
  export function closeAllWatchers(): void;
  export function getWatchedPaths(): string[];
  export class File extends FileS {}
  export class Directory extends DirectoryS {}
}

export = pathwatcher;
