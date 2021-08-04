export interface IFolderResponse {
  data: Array<IFolderData>;
}

export interface IExtractionOptions {
  extractTarget: string;
  sourceFolder: string;
  targetExtractionFolder: string;
  paginationOptions: IPaginationOptions;
  extractionMode: string;
}

export interface IPaginationOptions {
  pageLimit: number;
  page: number;
}
export interface IComicVineSearchMatch {
  description: string;
  id: number;
  volumes: string;
}
export interface IFolderData {
  name: string;
  extension: string;
  containedIn: string;
  isFile: boolean;
  isLink: boolean;
}

export interface IExplodedPathResponse {
  exploded: Array<string>;
  fileName: string;
}

export interface IComicBookCoverMetadata {
  name: string;
  path: string;
  containedIn: string;
  fileSize: string;
  imageHash: string;
  dimensions: {
    width: string;
    height: string;
  };
}

export interface IExtractedComicBookCoverFile {
  name: string;
  path: string;
  fileSize: number;
  extension: string;
  containedIn: string;
  calibreMetadata: {
    coverWriteResult: string;
  }
}

export interface IExtractComicBookCoverErrorResponse {
  message: string;
  errorCode: string;
  data: string;
}

export interface ISharpResizedImageStats {
  format: string;
  width: number;
  height: number;
  channels: number;
  premultiplied: boolean;
  size: number;
}
