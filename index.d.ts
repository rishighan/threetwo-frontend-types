export interface IFolderResponse {
  data: Array<IFolderData>;
}

export interface IExtractionOptions {
  extractTarget: string;
  targetExtractionFolder: string;
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
  path: string;
  extension: string;
  fileSize: number;
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
  cover: {
    filePath: string;
  };
  calibreMetadata: {
    coverWriteResult: string;
  };
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

// AirDCPP search API types

export interface SearchQuery {
  pattern: string;
  file_type: string | null;
  min_size: number | null;
  max_size: number | null;
  extensions: string[] | null;
  excluded: string[] | null;
}

export interface SearchInstance {
  id: number;
  owner: string;
  expires_in: number;
  current_search_id: number;
  queue_time: number;
  queued_count: number;
  result_count: number;
  searches_sent_ago: number;
  query?: SearchQuery;
}

export interface SearchResponse {
  queue_time: number;
  search_id: number;
  queued_count: number;
}

export const enum PriorityEnum {
  LOWEST = 2,
  LOW = 3,
  NORMAL = 4,
  HIGH = 5,
  HIGHEST = 6,
}
